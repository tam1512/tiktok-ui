// Header được sài chung cho 2 layout (Default và Only), cách này giúp giải quyết vần đề trùng lặp code
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={images.logo} alt="Tiktok"></img>
        <div className={clsx(styles.search)}>
          <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
          <button className={clsx(styles.clear)}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />
          <button className={clsx(styles.searchBtn)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div className={clsx(styles.inputBorder)}></div>
        </div>
        <div className={clsx(styles.actions)}>
          <div>
            <a href="/upload">
              <div className={clsx(styles.upload)}>
                <FontAwesomeIcon className={clsx(styles.uploadIcon)} icon={faPlus} />
                <span className={clsx(styles.uploadSpan)}>Tải lên</span>
              </div>
            </a>
          </div>
          <button className={clsx(styles.loginBtn)}>Đăng nhập</button>
          <FontAwesomeIcon className={clsx(styles.moreMenuIcon)} icon={faEllipsisVertical} />
        </div>
      </div>
    </header>
  );
}

export default Header;
