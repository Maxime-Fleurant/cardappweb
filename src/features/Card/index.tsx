import { FunctionComponent } from 'react';
// @ts-ignore
import Masonry from 'react-responsive-masonry';
import { RouteComponentProps } from 'react-router-dom';
import Head from './Head';

const Card: FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match }) => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
      <div className="col-span-1 row-start-2">Left</div>

      <div className="col-start-2 col-span-4">
        <Masonry columnsCount={2} gutter={16}>
          <Head id={match.params.id} />
        </Masonry>
      </div>

      <div className="col-span-1 ">Right</div>
    </div>
  );
};

export default Card;
