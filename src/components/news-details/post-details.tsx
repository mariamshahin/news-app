import Link from 'next/link';
import { Post } from 'app/types';
import { FaShareAlt, FaComments } from 'react-icons/fa';
import classNames from 'classnames';

const PostDetails = ({
  post,
}: React.PropsWithChildren<{
  post?: Post;
}>) => {
  return (
    <>
      <div className='my-5'>
        <h5 className='font-size-32'>{post?.title}</h5>
        <div className='d-flex flex-row mt-3 mb-1 font-size-12'>
          <span className='text-muted text-truncate'>By {post?.author}</span>
        </div>
      </div>
      <div className='text-center'>
        {/* Next.js Image tage prevent external domains */}
        {/* eslint-disable */}
        <img
          src={post?.urlToImage || 'https://via.placeholder.com'}
          alt={post?.title}
          className='img-thumbnail'
        />
        {/* eslint-enable */}
        <div className='text-muted font-size-14 my-4'>
          <p>
            {post?.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
