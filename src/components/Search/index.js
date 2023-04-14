/** Logic
 * F5 input k focus
 * Khi có từ khóa tìm kiếm xuất hiện dấu x, k có k hiện, bấm dấu x -> xóa từ khóa và kết quả
 * Sau khi bấm dấu X vẫn focus input
 * Khi blur ra ngoài ẩn kết quả tìm kiếm, focus lại hiện kqtk
 * blur ra ngoài -> không focus ->bấm x -> focus
 * Trong lúc tìm kiếm hiện loading
 * Lúc đang nhập từ khóa tìm kiếm thì sẽ k tìm kiếm ngay, khi người dùng gõ xong và dừng lại một khoảng thời gian nhỏ thì mới bắt đầu tìm kiếm (giúp tối ưu hóa việc tìm kiếm, không phải nhập từ nào là tìm từ đó mà là nhập xong mới tìm)
 * Khi tìm kiếm k có kết quả sẽ k hiện kqtk
 */
import { useState, useEffect, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import clsx from 'clsx';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWraper } from '~/components/Popper';
import { ClearIcon, SearchIcon } from '~/components/Icon';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <TippyHeadless
      interactive
      visible={showResult && searchResult.length > 0}
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
      onClickOutside={handleHideResult}
    >
      <div className={clsx(styles.search)}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={clsx(styles.clear)} onClick={handleClear}>
            <ClearIcon />
          </button>
        )}
        {/* <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} /> */}
        <button className={clsx(styles.searchBtn)}>
          <SearchIcon />
        </button>
        <div className={clsx(styles.inputBorder)}></div>
      </div>
    </TippyHeadless>
  );
}

export default Search;
