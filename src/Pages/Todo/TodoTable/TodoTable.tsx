import TodoState, { ITodoItem } from '../todo.state';
import { FunctionComponent, useState } from 'react';
import styles from './TodoTable.module.sass';
import TodoModal from '../../../shared/ui-kit/Modal/TodoModal/TodoModal';
import Button from '../../../shared/ui-kit/Button/Button';

interface IProps {
  items: ITodoItem[];
}

const TodoTable: FunctionComponent<IProps> = ({ items }) => {
  const renderTodos = () => {
    return items.map((item) => (
      <div key={item.id} className={styles.item}>
        <span>{item.text}</span>
        <div className={styles.buttons}>
          <Button styleType={'secondary'} onClick={TodoState.delete(item.id)}>
            Delete
          </Button>
        </div>
      </div>
    ));
  };
  return <div className={styles.container}>{renderTodos()}</div>;
};

export default TodoTable;
