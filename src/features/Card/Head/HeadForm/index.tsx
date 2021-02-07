import { FunctionComponent, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from '../../../../graphql/mutations';
import { UpdateCardMutation, UpdateCardMutationVariables } from '../../../../API';
import {
  saveForm,
  selectForm,
  selectSaveForm,
  updateFormDesc,
  updateFormTitle,
} from '../HeadSlice';
import FormWiew from './FormView';

export type TChangeTitle = (titleInput: string) => void;
export type TChangeDesc = (descInput: string) => void;

const HeadForm: FunctionComponent<{
  id: string;
  title: string;
  desc: string;
}> = ({ id, title, desc }) => {
  const formState = useSelector(selectForm);
  const saveFormState = useSelector(selectSaveForm);
  const dispatch = useDispatch();

  const [updateCa, { data, loading, error }] = useMutation<
    UpdateCardMutation,
    UpdateCardMutationVariables
  >(
    gql`
      ${updateCard}
    `
  );

  // console.log(loading, error, data);

  // useEffect(() => {
  //   console.log('fdlk', saveFormState, loading, error, {
  //     name: formState.title,
  //     description: formState.desc,
  //     id,
  //   });
  //   if (saveFormState) {
  //     console.log('sss');
  //     updateCa({
  //       variables: { input: { name: formState.title, description: formState.desc, id } },
  //     });
  //   }
  // }, [saveFormState]);

  useEffect(() => {
    console.log(data, loading, error, 'Fdlfdlkfdlk');
  }, [data, loading, error]);

  const changeTitle: TChangeTitle = (titleInput) => {
    dispatch(updateFormTitle(titleInput));
  };

  const changeDesc: TChangeDesc = (descInput) => {
    dispatch(updateFormDesc(descInput));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={formState.title}
          onChange={(e) => changeTitle(e.target.value)}
          className="block"
        />
        <input
          type="text"
          value={formState.desc}
          onChange={(e) => changeDesc(e.target.value)}
          className="block"
        />
        <button
          type="button"
          onClick={() => {
            updateCa({
              variables: { input: { name: formState.title, description: formState.desc, id } },
            });
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default HeadForm;
