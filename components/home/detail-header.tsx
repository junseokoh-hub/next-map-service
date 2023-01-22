import classes from './detail.module.scss';
import styles from '../common/header.module.scss';
import type { Store } from '../../types/store';
import copy from 'copy-to-clipboard';

interface Props {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  return (
    <div className={classes.header}>
      <button
        className={`${classes.arrowButton} ${expanded ? classes.expanded : ''}`}
        onClick={onClickArrow}
        disabled={!currentStore}
        aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
      >
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
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
          />
        </svg>
      </button>
      {!currentStore && <p className={classes.title}>매장을 선택해주세요</p>}
      {currentStore && (
        <div className={classes.flexRow}>
          <h1 className={classes.title}>{currentStore.name}</h1>
          <button
            className={styles.box}
            onClick={() => {
              copy(location.origin + '/' + currentStore.name);
            }}
            aria-label="매장 페이지 주소 클립보드 복사"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ width: 20, height: 20 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
export default DetailHeader;
