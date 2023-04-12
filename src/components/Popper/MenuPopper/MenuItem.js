import clsx from 'clsx';

import Button from '~/components/Button';
import styles from './MenuPopper.module.scss';

function MenuItem({ data, onClick }) {
  const classes = clsx(styles.menuItem, { [styles.separate]: data.separate });
  return (
    <Button leftIcon={data.icon} className={classes} to={data.to} href={data.href} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
