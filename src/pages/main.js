import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #FFF;
        border: 0;
        font-size: 18px;
        color: #444;
        border-radius: 3px;
    }

    button {
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b0;
        color: #FFF;
        border: 0;
        font-size: 20px;
        border-radius: 3px;
        font-weight: bold;

        &:hover {
            background: #52D89F;
        }
    }

`;



const Main = () => (
    <Container>
        <img src={logo} alt="GitHub Compare" />
        <h1>Hello World</h1>

        <Form>
            <input type="text" placeholder="usuário/repositório" />
            <button type="submit">OK</button>
        </Form>
    </Container>
);

export default Main;
