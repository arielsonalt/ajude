import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
    Segment,
    Header,
    Grid,
    Form,
    Message,
    Button
} from 'semantic-ui-react'
import estados from '../estados.json'

export class CadastroEnsino extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rua: '',
            bairro: '',
            cidade: '',
            estado: '',
        }
    }
    cepAction = () => {
        const cepInput = document.getElementsByName('cep')[0].value;
        console.log(cepInput);
        axios.get('http://viacep.com.br/ws/' + cepInput + '/json/').then((res) => {
            console.log(res.data);

            this.setState({
                rua: res.data.logradouro,
                bairro: res.data.bairro,
                cidade: res.data.localidade,
                estado: res.data.uf,
            });


        })
    }

    render() {
        return (
            <div className='login-form'>
                <style>
                    {
                        `body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                                                        height: 51.5em;
                                                        background:#2185d0!important;
                                                        }`
                    }
                </style>
                <Grid textAlign='center' style={{ height: '100%', padding: '2em' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h2' inverted textAlign='center'>
                            Instituição de Ensino
                        </Header>
                        <Form>
                            <Segment stacked textAlign="left">
                                <Form.Group widths='equal'>
                                    <Form.Field>
                                        <Form.Input fluid icon='user' iconPosition='left' label='Nome' placeholder='Nome' name='nome' />
                                    </Form.Field>

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field>
                                        <label>
                                            Estado
                                        <select style={{ marginTop: '0.4em' }} disabled value={this.state.estado}>
                                                {estados.map((e, i) => { return <option key={i}>{e.sigla}</option> })}
                                            </select>
                                        </label>
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input fluid label='*CEP' placeholder='CEP' name='cep' onBlur={this.cepAction} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input label='Cidade' placeholder='Cidade' value={this.state.cidade} name='cidade' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input fluid label='Número' placeholder='Número' name='numero' />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field>
                                        <Form.Input fluid label='Bairro' placeholder='Bairro' value={this.state.bairro} name='bairro' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input fluid label='Rua' placeholder='Rua' value={this.state.rua} name='rua' />
                                    </Form.Field>

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field>
                                        <Form.Input fluid label='Complemento' placeholder='Complemento' name='complemento' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Input fluid label='Telefone' placeholder='Telefone' name='telefone' />
                                    </Form.Field>

                                    <Form.Field>
                                        <Form.Input fluid label='Celular' placeholder='Celular' name='celular' />
                                    </Form.Field>
                                </Form.Group>

                                <Button color='green' fluid size='big' >
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