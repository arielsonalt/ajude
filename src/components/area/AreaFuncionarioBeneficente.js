import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Segment,
    Grid,
    Menu,
    Button,
    Responsive,
    Header,
    Divider,
    Icon,
    Tab,
    List,
    Label
} from 'semantic-ui-react'


export class AreaFuncinarioBeneficente extends Component {
    render() {

        return (
            <div className='areaStyle'>
                <Grid centered>
                    <div style={styles.menu}>
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
                        <Responsive>
                            <Grid
                                centered
                                color="blue"
                                textAlign='center'
                                style={{ minHeight: 0, padding: '2em 0em' }}
                                vertical="true"
                            >
                                <Menu size='large' style={{ backgroundColor: "#eeeeee" }} >
                                    <Container>
                                        <Menu.Item position='left'>
                                            <div    >
                                                <Label
                                                    color='blue'
                                                    style={{ fontSize: "1.3em" }} >
                                                    <Icon name='user' />
                                                    João Silveira Marins
                                                </Label>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item position='right'>
                                            <Button
                                                color='red'
                                                icon='sign-out'
                                                style={{ marginLeft: '0.5em' }}
                                                size='large'
                                            >
                                                <Icon name='sign-out' />
                                                Sair
                                            </Button>
                                        </Menu.Item>
                                    </Container>
                                </Menu>
                            </Grid>
                        </Responsive >
                    </div>
                </Grid >
                <Grid
                    container
                    columns={2}
                    centered
                    stackable
                    style={{ paddingTop: '1em', marginTop: "2em", backgroundColor: "#eeeeee" }}
                >
                    <Grid.Column largeScreen={3} floated='left' style={{ margin: '1em', backgroundColor: "#777777" }}>

                    </Grid.Column>
                    <Grid.Column largeScreen={11} floated='right' style={{ margin: '1em', backgroundColor: "#777777" }}>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

const styles = {
    menu: {
        width: "100%",
        marginTop: '1em',
        left: 0,
        zIndex: 100
    },
    pane: {
        color: 'red',
    }
}



const Lista = () => (
    <List>
        <List.Item>
            <List.Icon name='folder' />
            <List.Content>
                <List.Header>src</List.Header>
                <List.Description>Source files for project</List.Description>
                <List.List>
                    <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                            <List.Header>site</List.Header>
                            <List.Description>Your site's theme</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                            <List.Header>themes</List.Header>
                            <List.Description>Packaged theme files</List.Description>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='folder' />
                                    <List.Content>
                                        <List.Header>default</List.Header>
                                        <List.Description>Default packaged theme</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='folder' />
                                    <List.Content>
                                        <List.Header>my_theme</List.Header>
                                        <List.Description>
                                            Packaged themes are also available in this folder
                    </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='file' />
                        <List.Content>
                            <List.Header>theme.config</List.Header>
                            <List.Description>Config file for setting packaged themes</List.Description>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='folder' />
            <List.Content>
                <List.Header>dist</List.Header>
                <List.Description>Compiled CSS and JS files</List.Description>
                <List.List>
                    <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                            <List.Header>components</List.Header>
                            <List.Description>Individual component CSS and JS</List.Description>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='file' />
            <List.Content>
                <List.Header>semantic.json</List.Header>
                <List.Description>Contains build settings for gulp</List.Description>
            </List.Content>
        </List.Item>
    </List>

)
