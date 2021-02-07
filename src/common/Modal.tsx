import ReactDOM from 'react-dom';
import { useEffect, FunctionComponent, useRef } from 'react';

const modalRoot = document.getElementById('modal-root');

const Modal: FunctionComponent = ({ children }) => {
  const container = document.createElement('div');

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(container);
    }

    return () => {
      if (modalRoot) {
        modalRoot.removeChild(container);
      }
    };
  }, [children]);

  return ReactDOM.createPortal(
    <div className="flex fixed flex-col top-0 left-0 h-full w-full p-24 justify-center items-center bg-gray-800 bg-opacity-50 overflow-y-auto">
      {children}
    </div>,
    container
  );
};

export default Modal;
