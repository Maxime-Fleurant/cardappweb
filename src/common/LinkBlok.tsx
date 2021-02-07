import { FunctionComponent } from 'react';

const LinkBlok: FunctionComponent<{
  name: string | null;
  coverImage: string | null;
  link: string;
}> = ({ name, coverImage, link }) => {
  return (
    <a
      href={link}
      className=" h-48 w-full bg-gray-100 flex justify-items-start items-end text-4xl bg-cover bg-center p-3 text-gray-50 cursor-pointer border border-gray-800"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(
        31, 41, 55, .0) , rgba(
        31, 41, 55, .5) ), url(${coverImage})`,
      }}
    >
      {name}
    </a>
  );
};

export default LinkBlok;
