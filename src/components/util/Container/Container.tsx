import styles from './Container.module.scss';
import { ContainerProps } from 'types/interfaces/util.interfaces';

const Container = ({ className, children, ...rest }: ContainerProps) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
