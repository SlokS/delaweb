import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Form, Card, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {PROFILE_ROUTE} from '../utils/consts';
import {change} from '../http/userAPI';

const ChangeProfileInfo = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const history = useHistory();

    const click = async () => {
        try {
            let data;
            data = await change(user.id, name, surname);
            dispatch({type: 'LOAD_USER_INFO', user: {id: user.id, name: data.name, surname: data.surname, email: user.email }});
            console.log(data);
            alert('Данные успешно изменены');
            history.push(PROFILE_ROUTE);
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
                <h2 className="m-auto">Введите новые данные профиля</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder={`Имя: ${user.name}`}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={`Фамилия: ${user.surname}`}
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    /> 
                    <Button 
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                        >
                        Изменить
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default ChangeProfileInfo;