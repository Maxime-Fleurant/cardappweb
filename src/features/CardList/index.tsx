import { FunctionComponent } from 'react';

import test2 from '../../img/test2.jpg';

const CardList: FunctionComponent = () => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
      {[...new Array(17)].map(() => {
        return (
          <div
            className=" h-48 w-full bg-gray-100 flex justify-items-start items-end text-4xl bg-cover bg-center p-3 text-gray-50 cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(
              31, 41, 55, .0) , rgba(
                31, 41, 55, .5) ),url(${test2})`,
            }}
          >
            Design Thinking
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
