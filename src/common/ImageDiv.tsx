import { Storage } from 'aws-amplify';
import React, { FunctionComponent, useEffect, useState } from 'react';

const ImageDiv: FunctionComponent<{
  img: string | null;
  style?: React.CSSProperties;
  className?: string;
}> = ({ img, style, className }) => {
  const [image, setImage] = useState<string | undefined>();

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
    <div className={className} style={{ ...style }}>
      <img src={image} alt="" />
    </div>
  );
};

export default ImageDiv;
