import styles from './TodoModal.module.sass';
import { FunctionComponent } from 'react';
import Modal from '../Modal';
import { ITodoItem } from '../../../../Pages/Todo/todo.state';

interface IProps {
  onClose: () => void;
}

const TodoModal: FunctionComponent<IProps> = ({ onClose }) => {
  return <Modal onClose={onClose}></Modal>;
};

export default TodoModal;
