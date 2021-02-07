import { FunctionComponent, useState } from 'react';
import Modal from '../../common/Modal';

const CatBlok: FunctionComponent<{ name: string }> = ({ name, children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col items-center w-full h-full justify-center"
      onClick={() => {
        console.log('fdlk');
        setModalOpen(true);
      }}
    >
      <div>{name}</div>
      <div className="h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {modalOpen && <Modal>{children}</Modal>}
    </div>
  );
};

export default CatBlok;
