import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { User } from '../../models/user.model';
import './UserEntity.scss';

export interface OwnProps {
  userData: User
  openModal: (userId: number) => void
}

const UserEntity = (props: OwnProps) => {

  let counter: number = 0
  let timeout: any
    
  const toggle = () => {
      // Hack for DoubleClick
      if (timeout) clearTimeout(timeout)
      counter++
      timeout = setTimeout(() => {
        if (counter === 2) {
          props.openModal(props.userData.id)
        }
        counter = 0
      }, 250) 
  }

    return (
        <Card key={props?.userData?.id} onClick={toggle} className='userEntity'>
        <CardTitle className='title'><h2>{props?.userData?.name}</h2></CardTitle>
        <CardBody className='details'>
          <div>{props?.userData?.email}</div>
          <div>{props?.userData?.city}</div>
          <div>{props?.userData?.phone}</div>
          <div>{props?.userData?.website}</div>
          <div>{props?.userData?.companyName}</div>
        </CardBody>
      </Card>
    );
}

export default UserEntity