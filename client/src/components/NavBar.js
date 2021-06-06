import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'; 
import {NavLink, useHistory} from 'react-router-dom';
import {MAIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from '../utils/consts';

const NavBar = () => {
    const isAuth = useSelector(state => state.isAuth);
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={MAIN_ROUTE}>Главная</NavLink>
                {!isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >
                            Войти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-light mr-2"}
                            onClick={() => history.push(PROFILE_ROUTE)}
                        >
                            Профиль
                        </Button>
                        <Button variant={"outline-light"} onClick={()=>dispatch({type: 'USER_LEAVE'})}>Выйти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default NavBar;