import { Comment, Post } from 'app/types';
import CommentsForm from './comment-form';

const Comments = ({
  comments,
}: React.PropsWithChildren<{
  comments?: Array<Comment>;
}>) => {
  return (
    <div className='mt-5'>
      <h5 className='font-size-15'>
        <i className='bx bx-message-dots text-muted align-middle me-1'></i>{' '}
        Comments :
      </h5>

      {comments ? (
        comments.map((comment, i) => (
          <div key={i}>
            <div>
              <div className='d-flex pt-3'>
                <div className='avatar-xs me-3'>
                  <div className='avatar-title rounded-circle bg-light text-primary'>
                    <i className='bx bxs-user'></i>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='font-size-14 mb-1'>{comment.email}</h5>
                  <p className='text-muted'>{comment.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='text-muted text-small'>
          No comments yet, Be the first to comment
        </div>
      )}

      <div className='mt-4'>
        <h5 className='font-size-16 mb-3'>Leave a Message</h5>
        <CommentsForm />
      </div>
    </div>
  );
};

export default Comments;
