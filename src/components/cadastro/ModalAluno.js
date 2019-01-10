import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
class ModalAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }
    closeModal = () => {
        this.setState({ open: false });
        console.log(this.props.close);
    }
    close = () => this.setState({ open: false })
    render() {
        return (
            <div>
                <Modal size='mini' open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.closeModal}>No</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions>
                </Modal>
            </div>

        );
    }
}
export default ModalAluno