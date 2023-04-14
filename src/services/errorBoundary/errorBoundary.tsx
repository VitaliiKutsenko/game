import React from 'react';
import { ErrorBoundaryStyle } from '@src/services/errorBoundary/errorBoundaryStyle';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo: string | null;
}
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,

      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_, errorInfo) {
    const error = errorInfo.componentStack.split('\n').map((info, i) => <p key={i}>{info}</p>);

    this.setState({
      ...this.state,

      errorInfo: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryStyle>
          <summary>Something went wrong.</summary>

          {this.state.errorInfo}
        </ErrorBoundaryStyle>
      );
    }

    return this.props.children;
  }
}