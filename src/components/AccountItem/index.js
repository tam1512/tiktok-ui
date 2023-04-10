import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function AccountItem() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        className={clsx(styles.avatar)}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/afd8e4fc43d07f8093cfc5db261da27e~c5_300x300.webp?x-expires=1681293600&x-signature=teqcLp%2FmXhujKVIW4EPjbYgRH9E%3D"
        alt="hoaaa"
      />
      <div className={clsx(styles.info)}>
        <p className={clsx(styles.username)}>
          linhbarbie
          <FontAwesomeIcon className={clsx(styles.iconCheck)} icon={faCheckCircle} />
        </p>
        <p className={clsx(styles.nickname)}>Linh Barbie</p>
      </div>
    </div>
  );
}

export default AccountItem;
