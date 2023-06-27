import './styles.css';
import PaginationList from './PaginationList';
import { useEffect, useState } from 'react';

const Pagination = ({ postsLength, postPerPage, handleClick, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

//   const numbers = [];
//   for (let i = 1; i < Math.ceil(postsLength / postPerPage); i++) {
//     numbers.push(i);
//   }
//   //组件一加载，执行serPageNumber()，状态改变，组件再次渲染，再次执行serPageNumber()，无限循环
//   // 如果是props中，可以通过回调函数的方式解决
//   // 如果是在组件中，可以通过useEffect的方式解决  
//   setPageNumbers(numbers);  //无限循环报错。问题出在：应该在初始化阶段调用，而不是在渲染阶段调用。目前，每次渲染组件时都会调用setPageNumbers，导致出现无限循环渲染的错误
  
  useEffect(()=>{
    const numbers = [];
    for (let i = 1; i < Math.ceil(postsLength / postPerPage); i++) {
        numbers.push(i);
    }
    setPageNumbers(numbers);  
  }, [postsLength, postPerPage])  //依赖项，useEffect内需要用到的需要设置为依赖项

  console.log(pageNumbers)
  
  return (
    <div className='pagination'>
      {pageNumbers.map((number) => (
        <PaginationList key={number} number={number} handleClick={handleClick} currentPage={currentPage}/>
      ))}
    </div>
  );
};

export default Pagination;
