import React, { Component } from 'react'
import { Segment, Grid, Container, Header, Button, Divider } from 'semantic-ui-react'
import { ResponsiveContainer } from '../navbar/Navbar';
import Footer from '../footer/Footer'


export class TipoCadastro extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#eeeeee', height: '100%' }}>
                <ResponsiveContainer />
                <Container>
                    <Segment vertical style={{ marginTop: '12em' }} >
                        <Grid centered stackable>
                            <Header
                                inverted
                                as='h3'
                                content='Sua instituição foi cadastrada ?'
                                style={{
                                    fontSize: '4em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                    marginTop: '0em',
                                    color: '#2185d0'

                                }}
                            />
                        </Grid>
                        <Segment vertical inverted color='#eeeeee' style={{ padding: '3em', marginTop: '2em', backgroundColor: '#eeeeee' }}>

                            <Grid columns={2} centered stackable style={{ padding: 'em', marginBottom: '3em' }}>
                                <Grid.Column>
                                    <Container textAlign='center'>
                                        <Button primary inverted style={stylebutton.button}>
                                            Sim
                                    </Button>
                                    </Container>
                                </Grid.Column>
                                <Grid.Column>
                                    <Container textAlign='center'>
                                        <Button primary inverted style={stylebutton.button} >
                                            Não
                                    </Button>
                                    </Container>
                                </Grid.Column>
                            </Grid>

                        </Segment>
                    </Segment>
                </Container>
                <Footer />
            </div>
        );
    }
}

const stylebutton = {
    button: {
        fontSize: '3em',
        padding: '0.5em 1em',
        margin: '0em'
    }
}