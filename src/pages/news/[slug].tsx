import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getPost, selectNews } from 'app/store/features/news-slice';
import PostDetails from 'app/components/news-details/post-details';
import Comments from 'app/components/news-details/comments';

const Post: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const dispatch = useAppDispatch();

  const { post,comments } = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(getPost(slug));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Educatly | {post?.title}</title>
      </Head>

      <Container fluid className='px-5 py-4'>
        <Row className='justify-content-center'>
          <Col xl={8}>
            <PostDetails post={post} />
            <hr />
            <Comments comments={comments} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Post;
