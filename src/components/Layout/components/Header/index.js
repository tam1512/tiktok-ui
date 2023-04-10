// Header được sài chung cho 2 layout (Default và Only), cách này giúp giải quyết vần đề trùng lặp code
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={images.logo} alt="Tiktok"></img>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={clsx(styles.searchResult)} tabIndex={-1} {...attrs}>
              <PopperWraper>
                <h4 className={styles.searchTitle}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWraper>
            </div>
          )}
        >
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
        </Tippy>
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
