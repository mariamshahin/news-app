import { Form, Row, Col, Label, Input } from 'reactstrap';
import { useAppDispatch } from 'app/store/hooks';
import { useFormik } from 'formik';
import { addComment } from 'app/store/features/news-slice';

const CommentsForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {        
      dispatch(addComment(values));
      formik.resetForm()
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col md={6}>
          <div className='mb-3'>
            <Label htmlFor='commentname-input'>Name</Label>
            <Input
              type='text'
              name='name'
              className='form-control'
              id='commentname-input'
              placeholder='Enter name'
              onChange={formik.handleChange}
              required
            />
          </div>
        </Col>
        <Col md={6}>
          <div className='mb-3'>
            <Label htmlFor='commentemail-input'>Email</Label>
            <input
              type='email'
              name='email'
              className='form-control'
              id='commentemail-input'
              placeholder='Enter email'
              onChange={formik.handleChange}
              required
            />
          </div>
        </Col>
      </Row>

      <div className='mb-3'>
        <Label htmlFor='commentmessage-input'>Message</Label>
        <textarea
          name='message'
          className='form-control'
          id='commentmessage-input'
          placeholder='Your message...'
          onChange={formik.handleChange}
          required
        ></textarea>
      </div>

      <div className='text-end'>
        <button type='submit' className='btn btn-success w-sm'>
          Submit
        </button>
      </div>
    </Form>
  );
};

export default CommentsForm;
