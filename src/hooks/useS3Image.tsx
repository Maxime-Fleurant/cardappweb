import { Storage } from 'aws-amplify';
import { useEffect, useState } from 'react';

const useS3Image = (id: string | null | undefined) => {
  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    const fetchImage = async () => {
      if (id) {
        const currentImg = (await Storage.get(id, { level: 'protected' })) as string;
        setImage(currentImg);
      }
    };

    fetchImage();
  }, [id]);

  return image;
};

export default useS3Image;
