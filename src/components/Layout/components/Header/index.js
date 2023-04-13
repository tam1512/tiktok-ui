// Header được sài chung cho 2 layout (Default và Only), cách này giúp giải quyết vần đề trùng lặp code
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import TippyHeadless from '@tippyjs/react/headless';
import { faSpinner, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import MenuPopper from '~/components/Popper/MenuPopper';
import Button from '~/components/Button';
import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import { Logo } from '~/assets/logo';
import {
  ClearIcon,
  CoinIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  MoonIcon,
  SearchIcon,
  SettingIcon,
  UserIcon,
} from '~/components/Icon';
import Image from '~/components/Image';

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
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
    icon: <FeedbackIcon />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <MoonIcon />,
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
      icon: <UserIcon />,
      title: 'Xem hồ sơ',
      to: '/@linh',
    },
    {
      icon: <CoinIcon />,
      title: 'Nhận xu',
      to: '/coin',
    },
    {
      icon: <SettingIcon />,
      title: 'Cài đặt',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <Button svg to="/" className={clsx(styles.logo)}>
          <Logo />
        </Button>
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
              <ClearIcon />
            </button>
            <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />
            <button className={clsx(styles.searchBtn)}>
              <SearchIcon />
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
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy placement="bottom" content="Hộp thư" duration={[0, 200]}>
                <button className={clsx(styles.actionBtn)}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Đăng nhập</Button>
          )}

          <MenuPopper items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={clsx(styles.avatar)}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/afd8e4fc43d07f8093cfc5db261da27e~c5_100x100.jpeg?x-expires=1681495200&x-signature=5JtR9on51bdsUwN0AAKZkp%2BRmPY%3D"
                alt="linh"
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
