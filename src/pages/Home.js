import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Subtitle, Right, Content, Card, CardItem, Text, Item, Picker, Button, Icon, Label, Input, View } from 'native-base';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#8e44ad'}} androidStatusBarColor='#8e44ad'>
                    <Left style={{flex:1}}/>
                    <Body style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Title>OngkirApps</Title>
                        <Subtitle>Input Data</Subtitle>
                    </Body>
                    <Right style={{flex:1}}/>
                </Header>
                <Content padder>
                    {/* Card Input Data Asal */}
                    <Card>
                        <CardItem header>
                            <Text>Alamat Asal</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                    mode="dropdown"
                                    style={{
                                        width: undefined
                                    }}>
                                        <Picker.Item label="Pilih Provinsi" value="" />
                                        <Picker.Item label="Ini 1" value="key1" />
                                        <Picker.Item label="Ini 2" value="key2" />
                                        <Picker.Item label="Ini 3" value="key3" />
                                        <Picker.Item label="Ini 4" value="key4" />
                                    </Picker>
                                </Item>
                                <Item picker style={{marginTop:15}}>
                                <Picker
                                    mode="dropdown"
                                    style={{
                                        width: undefined
                                    }}>
                                        <Picker.Item label="Pilih Kabupaten/Kota" value="" />
                                        <Picker.Item label="Ini 1" value="key1" />
                                        <Picker.Item label="Ini 2" value="key2" />
                                        <Picker.Item label="Ini 3" value="key3" />
                                        <Picker.Item label="Ini 4" value="key4" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>

                    {/* Card Input Data Tujuan */}
                    <Card>
                        <CardItem header>
                            <Text>Alamat Tujuan</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                    mode="dropdown"
                                    style={{
                                        width: undefined
                                    }}>
                                        <Picker.Item label="Pilih Provinsi" value="" />
                                        <Picker.Item label="Ini 1" value="key1" />
                                        <Picker.Item label="Ini 2" value="key2" />
                                        <Picker.Item label="Ini 3" value="key3" />
                                        <Picker.Item label="Ini 4" value="key4" />
                                    </Picker>
                                </Item>
                                <Item picker style={{marginTop:15}}>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}>
                                        <Picker.Item label="Pilih Kabupaten/Kota" value="" />
                                        <Picker.Item label="Ini 1" value="key1" />
                                        <Picker.Item label="Ini 2" value="key2" />
                                        <Picker.Item label="Ini 3" value="key3" />
                                        <Picker.Item label="Ini 4" value="key4" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>

                    {/* Card Input Data Berat */}
                    <Card>
                        <CardItem header>
                            <Text>Berat Paket</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Grams</Label>
                                    <Input/>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>

                    {/* Card Input Data Kurir */}
                    <Card>
                        <CardItem header>
                            <Text>Kurir</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                            mode="dropdown"
                                            style={{
                                                width: undefined
                                            }}>
                                        <Picker.Item label="Pilih Kurir" value="" />
                                        <Picker.Item label="JNE" value="jne" />
                                        <Picker.Item label="TIKI" value="tiki" />
                                        <Picker.Item label="POS INDO" value="pos" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>

                <View>
                    <Button style={{margin:10, backgroundColor:'#9b59b6'}} block>
                        <Text style={{color:'#fff', fontWeight:'500'}}>Cek Ongkir</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default Home;