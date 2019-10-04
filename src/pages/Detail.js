import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right } from 'native-base';

class Detail extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>OngkirApps</Title>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );
    }
}

export default Detail;