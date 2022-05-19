import { Post } from 'app/types';
import { Row, Col } from 'reactstrap';
import PostCard from '../shared/post-card';

const FeaturedPosts = ({
  posts,
}: React.PropsWithChildren<{ posts: Post[] }>) => {
  const [firstPost, ...rest] = posts;

  return (
    <Row className=''>
      <Col xs={12} lg={8}>
        {/* could be labeled by a flag */}
        <PostCard post={firstPost} megaTitle />
      </Col>
      <Col xs={12} lg={4}>
        <Row>
          {rest.map((post) => (
            <Col xs={12} key={post.url}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default FeaturedPosts;
