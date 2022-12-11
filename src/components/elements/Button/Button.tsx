import styles from './Button.module.scss';

import { ButtonProps } from 'types/interfaces/element.interfaces';

const Button = ({ buttonStyle = 'outline', children }: ButtonProps) => {
  let ButtonClassName = styles.button;

  if (buttonStyle) {
    ButtonClassName = `${ButtonClassName} ${styles[buttonStyle]}`;
  }

  return (
    <button type="button" className={ButtonClassName}>
      {children}
    </button>
  );
};

export default Button;
