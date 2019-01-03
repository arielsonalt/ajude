import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import Sad from '../img/sad.png';


const Error = () => (
    <body>
        <div className="error">
            <style>{`
                        body > div,
                        body > div > div,
                        body > div > div > div.error {
                        height: 100%;
                            }`}
            </style>
            <Grid textAligh="center" style={{ height: '100%' }} verticalAlign='middle' centered>
                <Grid.Column style={{ maxWidth: 450 }} >
                    <Segment inverted>
                        <Header inverted as='h1' color='teal' textAlign='center'>
                            <Image src={Sad} circular />
                            <div>
                                <Header inverted content='Erro 404' />
                                <Header inverted content='Page not found!' />
                            </div>
                        </Header>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    </body >

);

export default Error