import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ModalInstituicaoOuPassoa } from './ModalInstituicaoOuPessoa'
class ModalAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            close: true,
        }
    }
    show = () => {
        this.setState({ open: true })
    }

    close = () => this.setState({ open: false })

    render() {
        return (
            <div>
                <Modal size='tiny' open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Olá! Bem vindo ao Ajude+ !</Modal.Header>
                    <Modal.Content style={{ fontSize: '2em', textAlign: "center" }}>
                        Você é aluno ?
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            primary
                            floated='left'
                            content='Cancelar'
                            onClick={this.props.close}
                        />
                        <Button negative content='Não' onClick={() => { this.show() }}

                        />
                        <Link to='../CadastroAluno'>
                            <Button positive content='Sim' /></Link>
                    </Modal.Actions>
                </Modal>
                <ModalInstituicaoOuPassoa show={this.show} open={this.state.open} close={this.close} />
            </div>

        );
    }
}
export default ModalAluno