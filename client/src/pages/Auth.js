import React, { useState } from 'react';
import {Container, Form, Card, Button, Row} from 'react-bootstrap';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from '../utils/consts';
import {login, registration} from '../http/userAPI';
import {useSelector, useDispatch} from 'react-redux';

const Auth = () => {
    const isAuth = useSelector(state => state.isAuth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                dispatch({type: 'LOAD_USER_INFO', user: {id: data.id, name: data.name, surname: data.surname, email: data.email }});
                console.log(data);
            } else {
                data = await registration(email, password, name, surname);
                dispatch({type: 'LOAD_USER_INFO', user: {id: data.id, name: data.name, surname: data.surname, email: data.email }});
                console.log(data);
            }
            dispatch({type: 'USER_AUTH'});
            history.push(MAIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    {!isLogin ?
                        <>
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите имя"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите фамилию"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            /> 
                        </>
                        : ''
                    }
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button 
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Зарегестрироваться' }
                        </Button>
                    </Row>
                </Form>
            </Card>
            
        </Container>
    );
};

export default Auth;