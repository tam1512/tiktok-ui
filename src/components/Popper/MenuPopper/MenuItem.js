import clsx from 'clsx';

import Button from '~/components/Button';
import styles from './MenuPopper.module.scss';

function MenuItem({ data, onClick }) {
  return (
    <Button leftIcon={data.icon} className={clsx(styles.menuItem)} to={data.to} href={data.href} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
