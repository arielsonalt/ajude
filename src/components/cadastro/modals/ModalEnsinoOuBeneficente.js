import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export class ModalEnsinoOuBeneficente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    showt = () => {
        this.setState({ open: true })
    }

    close = () => this.setState({ open: false })
    render() {
        return (
            <div>
                <Modal size='tiny' open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Olá! Bem vindo ao Ajude+ !</Modal.Header>
                    <Modal.Content style={{ fontSize: '2em', textAlign: "center" }} centered='true' >
                        <p>Você trabalha em uma Instutuição...</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            primary
                            floated='left'
                            content='Cancelar'
                            onClick={this.props.close}
                        />
                        <Link to='../CadastroServidor'>
                            <Button negative >de ensino ?</Button>
                        </Link>
                        <Link to='../CadastroFuncionario'>
                            <Button positive icon='checkmark' labelPosition='right' content='beneficente ?' />
                        </Link>

                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}
