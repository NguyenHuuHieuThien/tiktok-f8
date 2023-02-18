import classNames from 'classnames/bind';
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faGear,
  faSignOut,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/Config/index';
import Button from '~/Component/Button';
import Menu from '~/Component/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/Component/Icon';
import Image from '~/Component/Images';
import Search from '../Search';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        { type: 'language', code: 'vi', title: 'Vietnamese' },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];
function Header() {
  // useState
  const currentUser = true;
  // useEffect

  // function

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // console.log(menuItem.code);
        break;
      default:
        // console.log(menuItem);
        break;
    }
  };
  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/profile' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    ...MENU_ITEM,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* {logo} */}
        <Link to={config.routes.home}>
          <div className={cx('logo')}>
            <img src={image.logo} alt="tiktok" />
          </div>
        </Link>
        {/* {search} */}
        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay="200ms" content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <button className={cx('action-btn')}>
                <MessageIcon />
              </button>
              <button className={cx('action-btn')}>
                <InboxIcon />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://scontent.fsgn2-8.fna.afbcdn.net/v/t39.30808-6/242150599_1261401134289849_4690599877796840597_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=gm_RHNGcK78AX9ELbKe&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAJdl8nGlTMZ4qtpOd2AhPTryv9Dp0DFO9SXLpevedwuA&oe=63EE9608"
                alt=""
                fallback="https://static2.yan.vn/YanNews/2167221/202006/cuc-tinh-y-la-ai-tieu-su-su-nghiep-doi-tu-cua-nu-dien-vien-ca-si-16d498dc.jpeg"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
