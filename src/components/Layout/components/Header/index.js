// Header được sài chung cho 2 layout (Default và Only), cách này giúp giải quyết vần đề trùng lặp code
import clsx from 'clsx';
import styles from './Header.module.scss';
function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>Header</div>
    </header>
  );
}

export default Header;
