import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class ModalTipoInstituicao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    render() {

        return (
            <div>
                <Modal size='tiny' open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Olá! Bem vindo ao Ajude+ !</Modal.Header>
                    <Modal.Content style={{ fontSize: '2em', textAlign: "center" }} centered>
                        <p>Escolha o tipo de instituicao.</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            primary
                            floated='left'
                            content='Cancelar'
                            onClick={this.props.close}
                        />
                        <Link to='../CadastroEnsino'><Button negative>Ensino</Button></Link>

                        <Link to='../CadastroBeneficente'>
                            <Button positive icon='checkmark' labelPosition='right' content='Beneficente' />
                        </Link>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}