import { useState } from 'react';
import './styles.css';

const PaginationList = ({ number, handleClick, currentPage }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      //当前list要不要改变class颜色，取决于是否等于currentpage index
      className={number===currentPage ? 'paginationList active' : 'paginationList'}
      onClick={() => {
        handleClick(number);  //点击currentPage状态值设为当前页面index
        setActive(true);  // 改变active状态为true
      }}
    >
      {number}
    </div>
  );
};

export default PaginationList;
