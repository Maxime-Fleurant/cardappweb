import { Storage } from 'aws-amplify';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardBlok: FunctionComponent<{
  id: string;
  img: string | null;
  title: string;
}> = ({ img, id, title }) => {
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
    <Link
      className="h-48 bg-center bg-cover flex flex-col justify-end p-4 text-4xl font-medium text-gray-100 border border-gray-800"
      to={`/card/${id}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(
        31, 41, 55, .0) , rgba(
        31, 41, 55, 1) ), url(${image})`,
      }}
    >
      {title}
    </Link>
  );
};

export default CardBlok;
