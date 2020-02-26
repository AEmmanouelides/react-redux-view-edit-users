  
import * as _ from 'lodash';
import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { User } from '../../models/user.model';

export interface OwnProps {
  userData: User | undefined
  handleSubmit: (userData: any) => void
}

const EditUser = (props: OwnProps) => {
    const [form, setState] = useState({
        id: props?.userData?.id,
        name: props?.userData?.name,
        email: props?.userData?.email,
        city: props?.userData?.city,
        phone: props?.userData?.phone,
        website: props?.userData?.website,
        companyName: props?.userData?.companyName,
      });

      const updateField = (e: any) => {
        setState({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    
    const submit = (e: any) => {
        e.preventDefault();
        props.handleSubmit(form)
    }
    
    const formIsNotDirty = _.isEqual(form, props.userData);

    return (
      <Form onSubmit={submit}>
        <Row form>
        <Col md={12}>
        <FormGroup>
                <Label for='name'>Name</Label>
                <Input 
                  required 
                  type='text' 
                  name='name' 
                  id='name' 
                  onChange={updateField} 
                  defaultValue={props?.userData?.name} />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
        <Col md={12}>
        <FormGroup>
                <Label for='email'> Email</Label>
                <Input 
                  required 
                  type='email' 
                  name='email' 
                  id='email' 
                  onChange={updateField} 
                  defaultValue={props?.userData?.email} />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
        <Col md={12}>
        <FormGroup>
              <Label for='city'>City</Label>
              <Input 
                required 
                type='text' 
                name='city' 
                id='city' 
                onChange={updateField} 
                defaultValue={props?.userData?.city} />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
        <Col md={12}>
        <FormGroup>
              <Label for='phone'>Phone</Label>
              <Input 
                required 
                type='text' 
                name='phone' 
                id='phone' 
                onChange={updateField} 
                defaultValue={props?.userData?.phone} />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
        <Col md={12}>
        <FormGroup>
              <Label for='website'>Website</Label>
              <Input 
                required 
                type='text' 
                name='website' 
                id='website'  
                onChange={updateField} 
                defaultValue={props?.userData?.website} />
            </FormGroup>
        </Col>
        </Row>

        <Row form>
        <Col md={12}>
        <FormGroup>
              <Label for='companyName'>Company Name</Label>
              <Input 
                required 
                type='text' 
                name='companyName' 
                id='companyName' 
                onChange={updateField} 
                defaultValue={props?.userData?.companyName} />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
        <Col> 
            <Button 
              disabled={formIsNotDirty} 
              color='primary' 
              className='float-right' 
              type='submit'>Save</Button>
        </Col>
        </Row>
        
      </Form>
    );
  }
  
  export default EditUser;