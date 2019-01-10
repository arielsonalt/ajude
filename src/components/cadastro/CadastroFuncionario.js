import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Segment,
    Header,
    Grid,
    Form,
    Message,
    Button
} from 'semantic-ui-react'

export class CadastroFuncionario extends Component {
    render() {
        return (


            <div className='login-form'>
                <style>
                    {
                        `body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                                                        height: 50.5em;
                                                        background:#2185d0!important;
                                                        }`
                    }
                </style>
                <Grid textAlign='center' style={{ height: '100%', padding: '2em' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' inverted textAlign='center'>
                            Cadastro de Funcionário
                        </Header>
                        <Form>
                            <Segment stacked textAlign="left">
                                <Form.Field>
                                    <Form.Input fluid icon='user' iconPosition='left' label='Nome' placeholder='Nome' name='nome' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input label='Email' placeholder='E-mail' name='email' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input label='Confirme o email' placeholder='E-mail' name='confirmaEmail' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input label='Senha' placeholder='Senha' name='senha' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input label='Confirme a senha' placeholder='Senha' name='confimaSenha' />
                                </Form.Field>
                                <Button color='green' fluid size='large'>
                                    Salvar
                                    </Button>
                            </Segment>
                        </Form>
                        <Message>
                            <Link to='/'>
                                <Button color='red' fluid size='large'>
                                    Cancelar
                            </Button>
                            </Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}