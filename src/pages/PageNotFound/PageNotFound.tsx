import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound: React.FC = () => (
  <Container>
    <div className='pageNotFound'>
    <img className='image' alt='pageNotFound' src='https://www.coengoedegebure.com/assets/images/404.png' />
      <div>
        <Link to='/'>
          <Button variant='primary'>Back to Home Page</Button>
        </Link>
      </div>
    </div>
  </Container>
)

export default PageNotFound 

