import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { fetchNews, selectNews } from 'app/store/features/news-slice';
import FeaturedPosts from 'app/components/news-list/featured-posts';
import RecentPosts from 'app/components/news-list/recent-posts';
import EmailBox from 'app/components/shared/email-box';
import SocialLinks from 'app/components/shared/social-links';
import TrendingPosts from 'app/components/news-list/trending-posts';
import { shuffle } from 'app/utils';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Educatly | News</title>
      </Head>

      <Container fluid className='px-5 py-4'>
        <h4 className='m-4 font-size-28 font-weight-semibold text-center'>
          Latest News
        </h4>
        <Row className='mx-4'>
          <Col xs={12} lg={10}>
            <FeaturedPosts posts={shuffle(posts, 3)} />
          </Col>
          <Col lg={2} className='d-none d-lg-block'>
            <Row>
              <Col xs={12}>
                <RecentPosts posts={shuffle(posts, 3)} />
                <EmailBox />
                <SocialLinks />
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className='m-4' />

        <h6 className='m-4 font-size-18 font-weight-meduim text-left'>
          Trending
        </h6>

        <Row className='mx-4'>
          <Col xs={12}>
            <TrendingPosts posts={shuffle(posts, 4)} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
