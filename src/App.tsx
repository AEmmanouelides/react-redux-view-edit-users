import React from 'react';
import { Card, Button, Container} from 'react-bootstrap'
import './App.scss';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Container>
    <Card className='mainCard'>
    <Card.Img variant='top' src='https://icons.iconarchive.com/icons/aha-soft/people/256/user-group-icon.png' />
    <Card.Body>
      <Card.Title>Users</Card.Title>
      <Card.Text>
        Let's have a look at Users database. 
        Only name, email, city, phone, website and company name details are provided.
      </Card.Text>
      <Link to='/users'>
        <Button variant='primary'>Let's go</Button>
      </Link>
    </Card.Body>
    </Card>

    <Card className='mainCard' >
    <Card.Img variant='top' src='http://icons.iconarchive.com/icons/aha-soft/large-calendar/256/Calendar-icon.png' />
    <Card.Body>
      <Card.Title>Events</Card.Title>
      <Card.Text>
        System events are triggered by the ObserveIT system. Events might be triggered when users reach their database storage limits.
      </Card.Text>
      <Link to='/events'>
        <Button disabled variant='primary'>Under Construction</Button>
      </Link>
    </Card.Body>
    </Card>

    <Card className='mainCard' >
    <Card.Img variant='top' src='http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Settings-icon.png' />
    <Card.Body>
      <Card.Title>Settings</Card.Title>
      <Card.Text>
        System settings are containing miscellaneous system preferences. Change user permissions, data configurations and model interfaces.
      </Card.Text>
      <Link to='/settings'>
        <Button variant='primary'>It's a trap!</Button>
      </Link>
    </Card.Body>
    </Card>
    </Container>
  )
}

export default App;
