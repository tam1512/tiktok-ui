import clsx from 'clsx';

import Button from '~/components/Button';
import styles from '../MenuPopper.module.scss';

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.icon} className={clsx(styles.menuItem)}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
