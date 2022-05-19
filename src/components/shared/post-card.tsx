import Link from 'next/link';
import { Post } from 'app/types';
import { FaShareAlt, FaComments } from 'react-icons/fa';
import classNames from 'classnames';

const PostCard = ({
  post,
  megaTitle,
  noTitle,
}: React.PropsWithChildren<{
  post: Post;
  megaTitle?: boolean;
  horizontal?: boolean;
  noTitle?: boolean;
}>) => {
  const postLink = `news/${post?.title.replace(/\s+/g, '-')}`;

  return (
    <div className='card shadow-none border-0 mx-2 my-4'>
      <div className='position-relative mb-3'>
        <Link href={postLink}>
          {/* Next.js Image tage prevent external domains */}
          {/* eslint-disable */}
          <img
            src={post?.urlToImage || 'https://via.placeholder.com'}
            alt={post?.title}
            className='img-thumbnail'
          />
          {/* eslint-enable */}
        </Link>
      </div>
      <div>
        <h5
          className={classNames({
            'font-size-32': megaTitle,
            'font-size-18': !megaTitle,
            'd-none': noTitle,
          })}
        >
          <Link href={postLink}>
            <a>{post?.title}</a>
          </Link>
        </h5>

        <p className='text-truncate'>{post?.content}</p>

        <div className='d-flex flex-row mt-3 mb-1 font-size-12'>
          <span className='text-muted text-truncate'>By {post?.author}</span>
        </div>

        <div className='d-flex flex-row text-muted mt-2'>
          <div className='d-inline-block border rounded cursor-pointer'>
            <FaShareAlt className='mx-2' />
            <FaComments className='mx-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
