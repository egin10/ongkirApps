import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right, Subtitle, Content, List, ListItem, Thumbnail, Text, View } from 'native-base';
import NumberFormat from 'react-number-format';

import {URL, KEY, LOGO} from '../utils/Const';

class Detail extends Component {
    constructor(){
        super();
        this.state = {
            results: []
        }
    }

    componentDidMount(){
        this._checkOngkir();
    }

    _checkOngkir = () => {
        let {data} = this.props;
        const formData = new URLSearchParams();
        formData.append('origin', data.originCity);
        formData.append('destination', data.destinationCity);
        formData.append('weight', data.weight);
        formData.append('courier', data.courier);

        fetch(`${URL}/cost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'key': KEY
            },
            body: formData.toString()
        })
        .then(res => res.json())
        .then(resData => {
            let status = resData['rajaongkir']['status']['code'];
            if(status === 200){
                this.setState({
                    results: resData['rajaongkir']['results'][0]['costs']
                })
            }
        });
    }

    render() {
        let {results} = this.state;
        let {courier} = this.props.data;
        let constItem = <View></View>;
        
        if(results){
            constItem = results.map(item => {
                return(
                    <ListItem avatar key={new Date().getMilliseconds+Math.random()}>
                        <Left>
                            <Thumbnail source={{
                                uri: LOGO[courier]
                            }}/>
                        </Left>
                        <Body>
                            <Text>{item.service}</Text>
                            <Text note>{item.description}</Text>
                            <Text note>{item.cost[0].etd} {courier != 'pos' ? ' HARI' : null}</Text>
                        </Body>
                        <Right>
                            <Text note>
                                Rp.{item.cost[0].value}
                            </Text>
                        </Right>
                    </ListItem>
                );
            });
        }

        return (
            <Container>
                <Header style={{backgroundColor: '#8e44ad'}} androidStatusBarColor='#8e44ad'>
                    <Left style={{flex:1}}/>
                    <Body style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Title>OngkirApps</Title>
                        <Subtitle>Hasil</Subtitle>
                    </Body>
                    <Right style={{flex:1}}/>
                </Header>
                <Content>
                    <List>
                        {constItem}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Detail;