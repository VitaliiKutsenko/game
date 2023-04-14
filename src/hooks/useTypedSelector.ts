import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@src/store/indexReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
