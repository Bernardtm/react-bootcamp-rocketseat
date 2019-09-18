import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {

    static defaultProps = {
        children: "Salvar"
    };
    
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string
    };

    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}



class App extends Component {
    state = {
        counter: 0
    };

    // Como utilizei a arrow function, o this se referencia ao que está fora
    // se utiliza a funcao comum, o this se referenciaria a propria funcao
    handleClick = () => {
        // set state sobrepõe o valor, não dá pra fazer ++ por exemplo
        // set state é assincrono, se obtermos o valor logo após, obteremos o valor anterior,
        // por ser assincrono, para evitar, fazemos uma função de callback,
        // onde obtemos o valor já alterado
        this.setState({ counter: this.state.counter + 1 }, () => {
            console.log(this.state.counter);
        });

        // esse formato é útil, porque o state é o da "fila" de alterações
        // e caso seja necessário alterar o estado de forma sequencial
        // não haverá problema quanto a sincronicidade
        this.setState(state => ({ counter: state.counter + 1 }));
        //alert("Botão clicado " + this.state.counter);
    }

    render() {
        console.log("Render...")
        return (
            <Fragment>
                <h1>Hello Rocketseat!</h1>
                <h2>{this.state.counter}</h2>
                <Button onClick={() => { alert("Button 1")}}>Salvar</Button>
                <Button onClick={this.handleClick}>Enviar</Button>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById('app'));
