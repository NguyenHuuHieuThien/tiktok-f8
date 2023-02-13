import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Img.module.scss';
import image from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
