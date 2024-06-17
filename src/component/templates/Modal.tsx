import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, children, onClose }: { isOpen: boolean, children: ReactNode, onClose: () => void }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          {/* modal-overlay */}
          <div onClick={onClose} className="fixed z-40 top-0 bottom-0 right-0 left-0 bg-black-darker/[.7] flex justify-center items-center" />
          {/* modal-content */}
          <div className="flex flex-col justify-center z-50 bg-gray-lighter min-w-[320px] min-h-[320px] rounded-3xl text-xs font-light absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 px-6 py-4 lg:min-w-[420px] lg:min-h-[400px] ">
            {/* Close Icon */}
            <button onClick={onClose} className="w-[10px] h-[10px] absolute top-4 right-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </button>
            {children}
          </div></>,
        modalRoot
      )}
    </>
  )
}
export default Modal