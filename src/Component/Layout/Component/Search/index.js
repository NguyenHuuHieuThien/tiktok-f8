import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccountItem from '~/Component/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  return (
    <HeadLessTippy
      visible={searchResult.length > 0 && showResult}
      interactive
      onClickOutside={handleHideResult}
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
        <input
          ref={inputRef}
          onFocus={() => setShowResult(true)}
          value={searchValue}
          placeholder="search accounts and videos"
          onChange={(e) => setSearchValue(e.target.value)}
          spellCheck={false}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadLessTippy>
  );
}

export default Search;
