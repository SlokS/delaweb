import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import {Container, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {CHANGE_ROUTE} from '../utils/consts';

const Profile = () => {
    const user = useSelector(state => state.user);
    const history = useHistory();
    console.log(user);
    return (
        <Container 
            className="pl-0 mt-5"
            style={{height: window.innerHeight - 54}}
        >
            <ul style={{paddingLeft: 0, listStyleType: "none"}}> 
                <li>id: {user.id}</li>
                <li>Имя: {user.name}</li>
                <li>Фаилия: {user.surname}</li>
                <li>mail: {user.email}</li>
            </ul>
            <Button
                variant={"outline-dark mr-2"}
                onClick={() => history.push(CHANGE_ROUTE)}
            >
                Редактировать профиль
            </Button>
        </Container>
    );
    
}

export default Profile;