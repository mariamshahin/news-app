import { Post } from 'app/types';
import { Row, Col } from 'reactstrap';
import PostCard from '../shared/post-card';

const RecentPosts = ({ posts }: React.PropsWithChildren<{ posts: Post[] }>) => {
  return (
    <Row>
      <div className='border my-3'>
        {posts.map((post) => (
          <Col xs={12} key={post.url}>
            <PostCard post={post} noTitle />
          </Col>
        ))}
      </div>
    </Row>
  );
};

export default RecentPosts;
