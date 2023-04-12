// Header được sài chung cho 2 layout (Default và Only), cách này giúp giải quyết vần đề trùng lặp code
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import TippyHeadless from '@tippyjs/react/headless';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faPlus,
  faGlobe,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleQuestion,
  faKeyboard,
  faMessage,
  faMoon,
  faPaperPlane,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

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

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (item) => {
    console.log(item);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '/@linh',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Nhận xu',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={images.logo} alt="Tiktok"></img>
        <TippyHeadless
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
        </TippyHeadless>

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
          {currentUser ? (
            <>
              <Tippy placement="bottom" content="Tin nhắn" duration={[0, 200]}>
                <button className={clsx(styles.actionBtn)}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy placement="bottom" content="Hộp thư" duration={[0, 200]}>
                <button className={clsx(styles.actionBtn)}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Đăng nhập</Button>
          )}

          <MenuPopper items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={clsx(styles.avatar)}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/afd8e4fc43d07f8093cfc5db261da27e~c5_100x100.jpeg?x-expires=1681495200&x-signature=5JtR9on51bdsUwN0AAKZkp%2BRmPY%3D"
                alt="hoaa"
              />
            ) : (
              <button className={clsx(styles.moreMenuIcon)}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </MenuPopper>
        </div>
      </div>
    </header>
  );
}

export default Header;
