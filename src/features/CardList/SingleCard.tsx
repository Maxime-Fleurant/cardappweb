import { FunctionComponent, useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { Link } from 'react-router-dom';

const SingleCard: FunctionComponent<{ name: string; coverImage: string | null; id: string }> = ({
  name,
  coverImage,
  id,
}) => {
  const [img, setImg] = useState<Object | String>();

  useEffect(() => {
    const fetchImage = async () => {
      if (coverImage) {
        const currentImg = (await Storage.get(coverImage, { level: 'protected' })) as string;
        setImg(currentImg);
      }
    };

    fetchImage();
  }, []);

  return (
    <Link
      to={`/card/${id}`}
      className=" h-48 w-full bg-gray-100 flex justify-items-start items-end text-4xl bg-cover bg-center p-3 text-gray-50 cursor-pointer border border-gray-800"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(
        31, 41, 55, .0) , rgba(
        31, 41, 55, .5) ), url(${img})`,
      }}
    >
      {name}
    </Link>
  );
};

export default SingleCard;
