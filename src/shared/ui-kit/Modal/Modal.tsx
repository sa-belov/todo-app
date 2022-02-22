import ReactDOM from 'react-dom';
import styles from './Modal.module.sass';
import { FunctionComponent } from 'react';

interface IProps {
  onClose: () => void;
}

const Modal: FunctionComponent<IProps> = ({ onClose, children }) => {
  const handleClick = (e: any) => {
    if (e.target.className === styles.shadow) onClose();
  };

  const modal = (
    <div className={styles.shadow} onClick={handleClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementsByTagName('body')[0]);
};

export default Modal;
