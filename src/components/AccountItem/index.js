import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '../Image';
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
      <Image className={clsx(styles.avatar)} src={data.avatar} alt={data.nickname} />
      <div className={clsx(styles.info)}>
        <p className={clsx(styles.username)}>
          {data.full_name}
          {data.tick && <FontAwesomeIcon className={clsx(styles.iconCheck)} icon={faCheckCircle} />}
        </p>
        <p className={clsx(styles.nickname)}>{data.nickname}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
