import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { ModalTipoInstituicao } from './ModalTipoInstituicao'
import { ModalEnsinoOuBeneficente } from './ModalEnsinoOuBeneficente'


export class ModalInstituicaoOuPassoa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openS: false,
        }
    }
    show = () => {
        this.setState({ open: true })
    }
    showS = () => {
        this.setState({ openS: true })
    }

    close = () => this.setState({ open: false })
    render() {
        return (
            <div>

                <Modal size='tiny' open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Olá! Bem vindo ao Ajude+ !</Modal.Header>
                    <Modal.Content style={{ fontSize: '2em', textAlign: "center" }}>
                        <p>Você gostaria de ...</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            primary
                            floated='left'
                            content='Cancelar'
                            onClick={this.props.close}
                        />
                        <Button negative onClick={() => { this.show() }}>Cadastrar Instituição</Button>
                        <Button positive icon='checkmark' onClick={() => { this.showS() }} labelPosition='right' content='Me cadastrar' />
                    </Modal.Actions>
                </Modal>
                <ModalEnsinoOuBeneficente open={this.state.openS} close={this.close} />
                <ModalTipoInstituicao open={this.state.open} close={this.close} />

            </div>
        );
    }
}
