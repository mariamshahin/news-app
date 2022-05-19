import { Post } from 'app/types';
import { Row, Col } from 'reactstrap';
import PostCard from '../shared/post-card';

const TrendingPosts = ({
  posts,
}: React.PropsWithChildren<{ posts: Post[] }>) => {
  return (
    <Row>
      {posts.map((post) => (
        <Col xs={12} md={4} lg={3} key={post.url}>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  );
};

export default TrendingPosts;
