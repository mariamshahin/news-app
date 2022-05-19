import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { fetchNews, selectNews } from 'app/store/features/news-slice';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const { news } = useAppSelector(selectNews);

  console.log(news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return <div></div>;
};

export default Home;
