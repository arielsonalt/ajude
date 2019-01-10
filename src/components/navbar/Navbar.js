import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalAluno from '../cadastro/modals/ModalAluno'
import {
    Button,
    Container,
    Grid,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
export class DesktopContainer extends Component {
    state = { open: false }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { fixed } = this.state
        return (
            <Grid centered>
                <div style={styles.menu}>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                        <Visibility
                            once={false}
                            onBottomPassed={this.showFixedMenu}
                            onBottomPassedReverse={this.hideFixedMenu}
                        >
                            <Grid
                                centered
                                inverted
                                color="blue"
                                textAlign='center'
                                style={{ minHeight: 0, padding: '1em 0em' }}
                                vertical="true"
                            >
                                <Menu
                                    fixed={fixed ? 'top' : null}
                                    pointing={!fixed}
                                    size='large'
                                >
                                    <Container>
                                        <Menu.Item ><Link to='/' ><div style={{ margin: '0.2em' }}>Home</div></Link></Menu.Item>
                                        {/*<Menu.Item as='a'>Work</Menu.Item>
                                        <Menu.Item as='a'>Company</Menu.Item>
                                        <Menu.Item as='a'>Careers</Menu.Item>*/}
                                        <Menu.Item position='right'>
                                            <Link to='/Login'>
                                                <Button label='Login' />
                                            </Link>

                                            <Button
                                                primary={fixed}
                                                style={{ marginLeft: '0.5em' }}
                                                onClick={() => { this.show() }}
                                            >
                                                Sign Up
                                            </Button>
                                            <ModalAluno show={this.show} open={this.state.open} close={this.close} />
                                        </Menu.Item>
                                    </Container>
                                </Menu>
                            </Grid>
                        </Visibility>
                    </Responsive >
                </div>
            </Grid >
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

export class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false, topo: '1em 0em' })

    handleToggle = () => this.setState({ sidebarOpened: true, topo: '7em 0em' })

    render() {

        const { sidebarOpened } = this.state
        const { topo } = this.state
        return (

            <div style={styles.menu}>
                <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item as='a' active>
                            Home
          </Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minWidth: 0, padding: topo }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large' >
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Log in
                  </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                  </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                        </Segment>
                    </Sidebar.Pusher>
                </Responsive>
            </div>

        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

const styles = {
    menu: {

        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 100
    }
}

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}