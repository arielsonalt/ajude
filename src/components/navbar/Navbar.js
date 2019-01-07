import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Container,
    Grid,
    Icon,
    Menu,
    Rail,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
export class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { fixed } = this.state

        return (
            <Grid centered >
                <Rail>
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
                                vertical
                            >
                                <Menu
                                    fixed={fixed ? 'top' : null}


                                    pointing={!fixed}

                                    size='large'
                                >
                                    <Container>

                                        <Menu.Item as='a' active>
                                            Home
                </Menu.Item>
                                        <Menu.Item as='a'>Work</Menu.Item>
                                        <Menu.Item as='a'>Company</Menu.Item>
                                        <Menu.Item as='a'>Careers</Menu.Item>
                                        <Menu.Item position='right'>
                                            <Link to='/Login'>
                                                <Button as='a' >
                                                    Login
                                        </Button>
                                            </Link>

                                            <Button as='a' primary={fixed} style={{ marginLeft: '0.5em' }}>
                                                Sign Up
                                        </Button>
                                        </Menu.Item>
                                    </Container>
                                </Menu>
                            </Grid>
                        </Visibility>
                    </Responsive >
                </Rail>
            </Grid>

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
            <Rail>
                <Grid>
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
                </Grid>
            </Rail>
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

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}