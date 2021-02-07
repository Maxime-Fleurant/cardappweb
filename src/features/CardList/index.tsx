import { gql, useQuery } from '@apollo/client';
import { FunctionComponent } from 'react';
import { ListCardsQuery, ListCardsQueryVariables } from '../../API';
import CardBlok from '../../common/CardBlok';
import { listCards } from '../../graphql/queries';

const CardList: FunctionComponent = () => {
  const { data } = useQuery<ListCardsQuery, ListCardsQueryVariables>(
    gql`
      ${listCards}
    `,
    {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
      variables: { filter: { cardParentId: { eq: 'null' } } },
    }
  );

  const cardList =
    data &&
    data.listCards &&
    data.listCards.items &&
    data.listCards.items.map((card) => {
      if (card) {
        return <CardBlok key={card.id} title={card.name} img={card.coverImage} id={card.id} />;
      }

      return undefined;
    });

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4">
      {cardList}
    </div>
  );
};

export default CardList;
