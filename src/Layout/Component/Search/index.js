import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccountItem from '~/Component/AccountItem';
import * as SearchService from '~/Service/searchService';
import { useDebounce } from '~/Hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      return;
    }
    setLoading(true);
    const fetchAPI = async () => {
      const result = await SearchService.search(searchValue);
      setSearchResult(result.data);
      setLoading(false);
    };

    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(' ')) {
      return;
    }
    setSearchValue(searchValue);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  return (
    <div>
      <HeadLessTippy
        interactive
        // appendTo={() => document.body}
        visible={searchResult.length > 0 && showResult}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((item) => (
                <AccountItem key={item.id} data={item} />
              ))}
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
            onChange={(e) => handleChange(e)}
            spellCheck={false}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button onMouseDown={(e) => e.preventDefault()} className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default Search;
