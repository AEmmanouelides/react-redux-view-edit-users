import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Modal, ModalBody, ModalHeader } from 'reactstrap';
import EditUser from '../../components/EditUser/EditUser';
import UserEntity from '../../components/UserEntity/UserEntity';
import { User } from '../../models/user.model';
import * as actions from '../../store/actions/user';
import './Users.scss';

export interface DispatchProps {
  retrieveUsers: () => void
  editUser: (updatedUser: User) => void
}

export interface StateProps {
  users?: User[]
  loading: boolean
}

export interface UserState {
  showModal: boolean
  userId?: number
}

export type UserProps = StateProps & DispatchProps

const Users = (props: UserProps) => {

  const [showModal, setModal] = useState(false);
  const [userId, setUserId] = useState(0);

  const toggle = () => setModal(!showModal);

  const editUser = (userId: number) => {
    setUserId(userId);
    setModal(!showModal); 
  }

  const handleSubmit = (userData: User) => {
    props.editUser(userData);
    setModal(!showModal);
  }

  useEffect(() => {
      if (props.users === undefined || props.users.length === 0) {
          props.retrieveUsers();
      }
  }, [props]); 

  return (
      <Container className='pageContainer'>
        <Modal isOpen={showModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>User Details</ModalHeader>
            <ModalBody>
              <EditUser 
                handleSubmit={handleSubmit}
                userData={
                  props.users && userId ?
                  props.users?.find(u => u.id === userId) : undefined} />
            </ModalBody>
        </Modal>
        {!props.loading && props.users && props.users.map(
          (userData, index) =>
              <UserEntity 
                key={index} 
                openModal={editUser} 
                userData={userData} />
        )}
      </Container>
    )
  
}

const mapStateToProps = (state: any): StateProps => {
  return {
    users: state.usersDatabase.users,
    loading: state.usersDatabase.loading
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  retrieveUsers: (): void => {
    actions.retrieveUsers(dispatch)
  },
  editUser: (data: User): void => {
    dispatch(actions.editUser(data))
  }
})

export default connect<StateProps, DispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Users)