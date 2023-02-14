import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={'/@' + data.nickname} className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src={data.avatar}
        alt=""
        fallback="https://static2.yan.vn/YanNews/2167221/202006/cuc-tinh-y-la-ai-tieu-su-su-nghiep-doi-tu-cua-nu-dien-vien-ca-si-16d498dc.jpeg"
      />
      <div className={cx('info')}>
        <div className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}
        </div>
        <div className={cx('username')}>{data.nickname}</div>
      </div>
    </Link>
  );
}

export default AccountItem;
