import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import Sad from '../img/sad.png';


const Error = () => (

    <div className="error">
        <style>{`
                        body > div,
                        body > div > div,
                        body > div > div > div.error {
                        height: 50.7em;
                        background:#2185d0!important;
                        color="#2145d0";
                        scroll:nome;
                            }`}
        </style>
        <Grid style={{ height: '100%' }} verticalAlign='middle' centered>
            <Grid.Column style={{ maxWidth: 450 }} >
                <Segment color='blue' inverted>
                    <Header as='h1' color='teal' textAlign='center'>
                        <Image src={Sad} size='massive' />
                        <div>
                            <Header color='blue' inverted content='Erro 404' />
                            <Header color='blue' inverted content='Page not found!' />
                        </div>
                    </Header>
                </Segment>
            </Grid.Column>
        </Grid>
    </div>


);

export default Error