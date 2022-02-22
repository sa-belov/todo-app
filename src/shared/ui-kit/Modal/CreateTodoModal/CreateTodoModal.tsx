import Modal from '../Modal';
import styles from './CreateTodoModal.module.sass';
import { FunctionComponent, useState } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import TodoState from '../../../../Pages/Todo/todo.state';

interface IProps {
  onClose: () => void;
}

interface ITodoState {
  draftTodo: { todo: string };
}

const CreateTodoModal: FunctionComponent<IProps> = ({ onClose }) => {
  const [state, setState] = useState<ITodoState>({
    draftTodo: generateEmptyTodo(),
  });

  const handleChange = (value: string, name: string) => {
    setState((prev) => ({
      ...prev,
      draftTodo: { ...prev.draftTodo, [name]: value },
    }));
  };

  const addTodo = () => {
    TodoState.append({ id: -1, resolved: false, text: state.draftTodo.todo });
    setState((prev) => ({
      ...prev,
      draftTodo: generateEmptyTodo(),
    }));
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <Input
          type={'text'}
          placeholder="Write text"
          name="todo"
          value={state.draftTodo.todo}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button styleType={'primary'} onClick={onClose}>
            Close
          </Button>
          <Button disabled={state.draftTodo.todo === ''} styleType={'secondary'} onClick={addTodo}>
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const generateEmptyTodo = () => ({ todo: '' });

export default CreateTodoModal;
