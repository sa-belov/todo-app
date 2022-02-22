import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import cn from 'classnames';
import styles from './Button.module.sass';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'secondary';
}

const Button: FunctionComponent<IProps> = ({ children, styleType, ...props }) => {
  const buttonCN = cn({
    [styles.button]: true,
    [styles[styleType] || '']: Boolean(styleType),
  });

  return (
    <button className={buttonCN} {...props}>
      {children}
    </button>
  );
};

export default Button;
