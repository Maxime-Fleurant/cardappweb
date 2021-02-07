import { gql, useQuery } from '@apollo/client';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '..';
import { GetCardQuery } from '../../../API';
import Modal from '../../../common/Modal';
import { getCard } from '../../../graphql/queries';
import HeadForm from './HeadForm';
import { selectModalOpen, triggerModal } from './HeadSlice';
import HeadView from './HeadView';

const HeadContainer: FunctionComponent<{ id: string }> = ({ id }) => {
  const modalOpen = useSelector(selectModalOpen);
  const dispatch = useDispatch();

  const { data, loading } = useQuery<GetCardQuery>(
    gql`
      ${getCard}
    `,
    { fetchPolicy: 'cache-and-network', nextFetchPolicy: 'cache-first', variables: { id } }
  );

  if (data && data.getCard) {
    const modal = modalOpen && (
      <div>
        <HeadForm id={data.getCard.id} title={data.getCard.name} desc={data.getCard.description} />
      </div>
    );

    return (
      <div>
        <HeadView card={data.getCard} onClick={() => dispatch(triggerModal())} />
        {modal}
      </div>
    );
  }

  return <div>error</div>;
};

export default HeadContainer;
