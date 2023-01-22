import { useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import type { Store } from '../../types/store';
import classes from './detail.module.scss';
import DetailHeader from './detail-header';
import DetailContent from './detail-content';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${classes.detailSection} ${
        expanded ? classes.expanded : ''
      } ${currentStore ? classes.selected : ''}`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};
export default DetailSection;
