import { useState } from 'react';
import Button from '../../shared/ui-kit/Button/Button';
import CreateTodoModal from '../../shared/ui-kit/Modal/CreateTodoModal/CreateTodoModal';
import TodoTable from './TodoTable/TodoTable';
import TodoState from './todo.state';
import styles from './Todo.module.sass';

const Todo = () => {
  const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Button styleType={'primary'} onClick={() => setCreateTodoModal(true)}>
        Add todo
      </Button>
      <TodoTable items={TodoState.getList()} />
      {createTodoModal && <CreateTodoModal onClose={() => setCreateTodoModal(false)} />}
    </div>
  );
};

export default Todo;
