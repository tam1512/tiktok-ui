import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
  to,
  href,
  primary,
  secondary,
  outline,
  rounded,
  disabled,
  small,
  large,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }

  const classes = clsx(styles.wrapper, {
    [className]: className,
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.outline]: outline,
    [styles.rounded]: rounded,
    [styles.disabled]: disabled,
    [styles.small]: small,
    [styles.large]: large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
      <span className={clsx(styles.title)}>{children}</span>
    </Comp>
  );
}

export default Button;
