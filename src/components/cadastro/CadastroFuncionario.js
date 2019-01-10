import React, { Component } from 'react'
import { Container, Segment, Header } from 'semantic-ui-react'

export class CadastroFuncionario extends Component {
    render() {
        return (

            <Container style={{ backgrond: 'blue', minWidght: "100%" }}>

                <Segment
                    inverted
                    color='blue'
                >
                    <Header></Header>
                </Segment>

            </Container>

        );
    }
}