import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';

import styles from './MenuPopper.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as PopperWraper } from '~/components/Popper';
import { useState } from 'react';

const defautFnc = () => {};

function MenuPopper({ children, items = [], onChange = defautFnc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 1000]}
      render={(attrs) => (
        <div className={clsx(styles.menuList)} tabIndex={-1} {...attrs}>
          <PopperWraper>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWraper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuPopper;
