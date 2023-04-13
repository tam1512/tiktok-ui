import clsx from 'clsx';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import images from '~/assets/images';
function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={clsx(styles.wrapper, className)}
      {...props}
      src={fallback || src}
      alt={alt}
      ref={ref}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
