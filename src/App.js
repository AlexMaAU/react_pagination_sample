import Post from './components/Post';
import Pagination from './components/Pagination';
import './app.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // 一般涉及API fetch/axios的时候会加上一个loading
  const [loading, setLoading] = useState(false);
  // 比如从后端拿到的 posts 数据
  const [posts, setPosts] = useState([]);
  // 记录当前的页面index
  const [currentPage, setCurrentPage] = useState(1);
  // 每个页面的posts数量 - 这个如果是固定的，可以不加这个state
  const [postPerPage] = useState(10);

  // 每一处API调用都对应useEffect()
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // 调用API，获取posts数据
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        // 把获得的posts数据存入posts状态
        setPosts(res.data);
        // API数据读取结束
        setLoading(false);
      } catch (error) {
        console.log(error);
        return setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // get current posts
  // 当前第2页，2*10=20，post数据第20条就是第2页的最后一条数据
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage; //posts数组的index从0开始
  // 取 post 数组 index 0-9 的数据，刚好10条
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='App'>
      <h1>My Blog</h1>
      <Post currentPosts={currentPosts} loading={loading} />
      <Pagination
        postsLength={posts.length}
        postPerPage={postPerPage}
        handleClick={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
