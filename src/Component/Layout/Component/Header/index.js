import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccountItem from '~/Component/AccountItem';
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* {logo} */}
        <div className={cx('logo')}>
          <img src={image.logo} alt="tiktok" />
        </div>
        {/* {search} */}
        <Tippy
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
        </Tippy>
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
