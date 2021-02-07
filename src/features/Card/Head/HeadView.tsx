import { FunctionComponent, useState } from 'react';
import { GetCardQuery } from '../../../API';

const HeadView: FunctionComponent<{
  card: Exclude<GetCardQuery['getCard'], null>;
  onClick?: () => void;
}> = ({ card, onClick }) => {
  return (
    <div onClick={onClick}>
      <div>{card.name}</div>
      <div>{card.description}</div>
    </div>
  );
};

export default HeadView;
