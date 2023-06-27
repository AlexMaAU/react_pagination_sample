import './styles.css'

const PostList = ({current}) => {
  return <div className='postList'>{current.title}</div>;
};

export default PostList;
