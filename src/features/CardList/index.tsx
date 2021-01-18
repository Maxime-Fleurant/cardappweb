import { FunctionComponent } from 'react';
// import test from '../../img/test.jpg';
import test2 from '../../img/test2.jpg';

const CardList: FunctionComponent = () => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
      <div className="h-48  bg-gray-100 flex justify-center items-center ">
        <div className="text-8xl" style={{ width: '4rem' }}>
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
      {[...new Array(17)].map(() => {
        return (
          <div
            className=" h-48 w-full bg-gray-100 flex justify-items-start items-end text-4xl bg-cover bg-center p-3"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba( 
              243, 244, 246, 0), rgba( 
                243, 244, 246, 1)),url(${test2})`,
            }}
          >
            New Card
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
