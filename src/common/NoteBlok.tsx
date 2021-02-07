import { FunctionComponent, useState } from 'react';
import Modal from './Modal';

const NoteBlok: FunctionComponent<{
  id: string;
  text: string;
  title: string | null;
}> = ({ text, title }) => {
  const [modalOpen, setModal] = useState<boolean>(false);

  const modalHandler = () => {
    setModal(!modalOpen);
  };

  return (
    <div onClick={() => modalHandler()}>
      {modalOpen && (
        <Modal>
          <div className="w-1/2 bg-gray-100 p-8 max-h-full overflow-y-auto border border-gray-800">
            <div className=" text-4xl font-medium mb-4">{title}</div>
            <div className="text-justify">{text}</div>
          </div>
        </Modal>
      )}
      <div className="p-4 h-48 overflow-hidden border border-gray-800 cursor-pointer">
        <div className=" text-2xl font-medium">{title}</div>
        <div className="text-justify">{text}</div>
      </div>
    </div>
  );
};

export default NoteBlok;
