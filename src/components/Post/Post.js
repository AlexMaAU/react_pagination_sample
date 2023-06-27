import './styles.css';
import PostList from './PostList';

const Post = ({ currentPosts, loading }) => {
  if (loading) {
    return <div className='loading'>loading</div>;
  }
  return (
    <div className='postContainer'>
      {currentPosts.map((current) => (
        <PostList key={current.id} current={current} />
      ))}
    </div>
  );
};

export default Post;
