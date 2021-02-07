import { Storage } from 'aws-amplify';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Modal from './Modal';

const ImageBlock: FunctionComponent<{
  img: string | null;
}> = ({ img }) => {
  const [image, setImage] = useState<string | undefined>();
  const [modalOpen, setModal] = useState<boolean>(false);

  const modalHandler = () => {
    setModal(!modalOpen);
  };

  useEffect(() => {
    const fetchImage = async () => {
      if (img) {
        const currentImg = (await Storage.get(img, { level: 'protected' })) as string;
        setImage(currentImg);
      }
    };

    fetchImage();
  }, [img]);

  return (
    <div onClick={() => modalHandler()}>
      {modalOpen && (
        <Modal>
          <img src={image} alt="" className="max-h-full border border-gray-800 bg-gray-50" />
        </Modal>
      )}
      <div className="border border-gray-800 cursor-pointer" onClick={() => modalHandler()}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ImageBlock;
