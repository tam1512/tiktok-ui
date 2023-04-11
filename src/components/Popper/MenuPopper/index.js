import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';

import styles from './MenuPopper.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWraper } from '~/components/Popper';
function MenuPopper({ children, items = [] }) {
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 1000]}
      render={(attrs) => (
        <div className={clsx(styles.menuList)} tabIndex={-1} {...attrs}>
          <PopperWraper>
            {items.map((item, index) => (
              <MenuItem key={index} data={item} />
            ))}
          </PopperWraper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuPopper;
