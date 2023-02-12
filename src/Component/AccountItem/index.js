import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://vietnamnexttopmodel.com/wp-content/uploads/2022/04/phim-cua-hua-khai.jpg"
        className={cx('avatar')}
        alt=""
      />
      <div className={cx('info')}>
        <div className={cx('name')}>
          <span>Nguyen Huu Hieu Thien</span>
          <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
        </div>
        <div className={cx('username')}>hieuthien1770</div>
      </div>
    </div>
  );
}

export default AccountItem;
