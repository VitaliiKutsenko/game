import React, { useCallback, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindowWrapper } from '@src/components/modal/modalStyled';

const modalRootElement = document.querySelector('#modal');

export const ModalWindow = ({ open, onClose, children }) => {
  const element = useMemo(() => document.createElement('div'), []);
  const closeModalHandler = useCallback(
    e => {
      const modalElem = e.target.id === 'close_modal';

      if (modalElem) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect((): any => {
    if (open) {
      modalRootElement.appendChild(element);

      return () => modalRootElement.removeChild(element);
    }
  }, [open]);

  if (open) {
    return createPortal(
      <ModalWindowWrapper id="close_modal" onClick={closeModalHandler}>
        {children}
      </ModalWindowWrapper>,
      element
    );
  }

  return null;
};
