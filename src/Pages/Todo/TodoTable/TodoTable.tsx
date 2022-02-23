import TodoState, { ITodoItem } from '../todo.state';
import { FunctionComponent } from 'react';
import styles from './TodoTable.module.sass';
import Button from '../../../shared/ui-kit/Button/Button';
import { observer } from 'mobx-react';

const TodoTable: FunctionComponent = observer(() => {
  const items = TodoState.getList();
  const renderTodos = () => {
    return items.map((item) => (
      <div key={item.id} className={item.resolved ? styles.red : styles.item}>
        <span>{item.text}</span>
        <div className={styles.buttons}>
          <Button styleType={'primary'} onClick={() => TodoState.delete(item.id)}>
            Delete
          </Button>
          {item.resolved ? (
            <></>
          ) : (
            <Button styleType={'primary'} onClick={() => TodoState.update({ ...item, resolved: true })}>
              Resolve
            </Button>
          )}
        </div>
      </div>
    ));
  };
  return <div className={styles.container}>{renderTodos()}</div>;
});

export default TodoTable;
