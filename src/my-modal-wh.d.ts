import React from 'react';

declare module 'my-modal-wh' {
     export interface ModalProps {
      title: string;
      isOpen: boolean;
      onClose: () => void;
    }
  
    export const Modal: React.FC<ModalProps>;
  
  }
  