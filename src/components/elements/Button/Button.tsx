import styles from './Button.module.scss';

import { ButtonProps } from 'types/interfaces/element.interfaces';

const Button = ({
  buttonStyle = 'outline',
  children,
  onClick
}: ButtonProps) => {
  let ButtonClassName = styles.button;

  if (buttonStyle) {
    ButtonClassName = `${ButtonClassName} ${styles[buttonStyle]}`;
  }

  return (
    <button type="button" className={ButtonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
