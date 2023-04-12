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
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMoon } from '@fortawesome/free-regular-svg-icons';

import MenuPopper from '~/components/Popper/MenuPopper';
import Button from '~/components/Button';
import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (item) => {
    console.log(item);
  };
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
          <Button
            outline
            secondary
            to="/upload"
            className={clsx(styles.upload)}
            leftIcon={<FontAwesomeIcon className={clsx(styles.uploadIcon)} icon={faPlus} />}
          >
            <span className={clsx(styles.uploadSpan)}>Tải lên</span>
          </Button>
          <Button primary>Đăng nhập</Button>
          <MenuPopper items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={clsx(styles.moreMenuIcon)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </MenuPopper>
        </div>
      </div>
    </header>
  );
}

export default Header;
