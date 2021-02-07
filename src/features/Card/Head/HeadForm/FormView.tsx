import { FunctionComponent } from 'react';
import { TChangeTitle, TChangeDesc } from '.';

const FormWiew: FunctionComponent<{
  onSave: () => void;
  title: string;
  desc: string;
  changeTitle: TChangeTitle;
  changeDesc: TChangeDesc;
}> = ({ onSave, title, desc, changeTitle, changeDesc }) => {
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => changeTitle(e.target.value)}
        className="block"
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => changeDesc(e.target.value)}
        className="block"
      />
      <button type="button" onClick={onSave}>
        save
      </button>
    </div>
  );
};

export default FormWiew;
