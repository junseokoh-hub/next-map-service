import Image from 'next/image';
import type { Store } from '../../types/store';
import Naver from 'public/images/naver.png';
import classes from './detail.module.scss';

type Props = {
  currentStore?: Store;
  expanded: boolean;
};

const DetailContent = ({ currentStore, expanded }: Props) => {
  if (!currentStore) return null;
  return (
    <div
      className={`${classes.detailContent} ${expanded ? classes.expanded : ''}`}
    >
      <div className={classes.images}>
        {currentStore.images.slice(0, 3).map((image) => (
          <div
            style={{ position: 'relative', maxWidth: 120, height: 80 }}
            key={image}
          >
            <Image
              src={image}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              sizes="120px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              priority
            />
          </div>
        ))}
      </div>
      {expanded && (
        <>
          <div className={classes.description}>
            <h2>설명</h2>
            <p>{currentStore.description}</p>
          </div>
          <hr />
          <div className={classes.basicInfo}>
            <h2>기본 정보</h2>
            <div className="address">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 20, height: 20 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span>{currentStore.address || '정보가 없습니다.'}</span>
            </div>
            <div className="phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 20, height: 20 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <span>{currentStore.phone || '정보가 없습니다.'}</span>
            </div>
            <div className="naverUrl">
              <Image src={Naver} width={20} height={20} alt="" />
              <a
                href={`https://pcmap.place.naver.com/restaurant/${currentStore.nid}/home`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>네이버 상세 정보</span>
              </a>
            </div>
          </div>
          <hr />
          <div className={classes.menus}>
            <h2>메뉴</h2>
            <ul>
              {currentStore.menus?.map((menu) => (
                <li className={classes.menu} key={menu.name}>
                  <span className={classes.name}>{menu.name}</span>
                  <span className={classes.price}>{menu.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default DetailContent;
