import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSign,
  faSignIn,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faUpload,
  faMessage,
  faCloudArrowUp,
  faUser,
  faGear,
  faQuestion,
  faRightFromBracket,
  faSignOut,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccountItem from '~/Component/AccountItem';
import Button from '~/Component/Button';
import Menu from '~/Component/Popper/Menu';
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
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  // function

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        console.log(menuItem.code);
        break;
      default:
        console.log(menuItem);
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
        <div className={cx('logo')}>
          <img src={image.logo} alt="tiktok" />
        </div>
        {/* {search} */}
        <HeadLessTippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadLessTippy>
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay="200ms" content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faMessage} />
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
              <img
                className={cx('user-avatar')}
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/242150599_1261401134289849_4690599877796840597_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=gm_RHNGcK78AX9ELbKe&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAJdl8nGlTMZ4qtpOd2AhPTryv9Dp0DFO9SXLpevedwuA&oe=63EE9608"
                alt=""
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
