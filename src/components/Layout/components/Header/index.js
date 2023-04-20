// Header được sài chung cho 2 layout (Default và Only), cách này giúp giải quyết vần đề trùng lặp code
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import MenuPopper from '~/components/Popper/MenuPopper';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Logo } from '~/assets/logo';
import {
  CoinIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  MoonIcon,
  SettingIcon,
  UserIcon,
} from '~/components/Icon';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

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
  const currentUser = true;

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
        {/* search */}
        <Search />

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
