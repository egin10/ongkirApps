import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Subtitle, Right, Content, Card, CardItem, Text, Item, Picker, Button, Icon, Label, Input, View } from 'native-base';
import {Actions} from 'react-native-router-flux';
import {KEY, URL} from '../utils/Const';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            provinces:[],
            originCities: [],
            destinationCities: [],
            selectedOriginProvince: null,
            selectedOriginCity: null,
            selectedDestinationProvince: null,
            selectedDestinationCity: null,
            weight: 0,
            courier: null
        }
    }

    componentDidMount(){
        this._onLoadProvince();
    }

    _onLoadProvince = () => {
        fetch(`${URL}/province`,{
            method:'GET',
            headers: {
                'key': KEY
            }
        })
        .then(res => res.json())
        .then(resData => {
            //console.log(resData);
            let status = resData.rajaongkir.status.code;
            if(status === 200){
                this.setState({
                    provinces:resData.rajaongkir.results
                })
            }
        });
    }

    _onOriginProvinceChange = (val) => {
        this.setState({
            selectedOriginProvince: val
        }, () => {
            fetch(`${URL}/city?province=${this.state.selectedOriginProvince.province_id}`, {
                method: 'GET',
                headers : {
                    'key': KEY
                }
            })
            .then(res => res.json())
            .then(resData => {
                let status = resData.rajaongkir.status.code;
                if(status === 200){
                    this.setState({
                        originCities: resData.rajaongkir.results
                    })
                }
            });
        });
    }

    _onDestinationProvinceChange = (val) => {
        this.setState({
            selectedDestinationProvince: val
        }, () => {
            fetch(`${URL}/city?province=${this.state.selectedDestinationProvince.province_id}`, {
                method: 'GET',
                headers : {
                    'key': KEY
                }
            })
            .then(res => res.json())
            .then(resData => {
                let status = resData.rajaongkir.status.code;
                if(status === 200){
                    this.setState({
                        destinationCities: resData.rajaongkir.results
                    })
                }
            });
        });
    }

    _onNavigationToDetail = () => {
        if(this.state.selectedOriginCity == null || this.state.selectedDestinationCity == null || this.state.weight == 0 || this.state.courier == null ){
            alert('Mohon lengkapi data!');
        }else{
            let params = {
                originCity: this.state.selectedOriginCity.city_id,
                destinationCity: this.state.selectedDestinationCity.city_id,
                weight: this.state.weight,
                courier: this.state.courier
            }
            Actions.detail({data: params});
        }
    }

    render() {
        let {provinces, selectedOriginProvince, originCities, selectedOriginCity, selectedDestinationProvince, destinationCities, selectedDestinationCity, courier} = this.state;

        let provinceItems = <View></View>;
        if(provinces){
            provinceItems = provinces.map(prov => {
                return(
                    <Picker.Item 
                        key={prov.province_id}
                        label={prov.province}
                        value={prov}/>
                );
            });
        }

        let originCityItems = <View></View>;
        if(originCities){
            originCityItems = originCities.map(city => {
                return(
                    <Picker.Item
                        key={city.city_id}
                        label={city.city_name}
                        value={city}/>
                )
            });
        }

        let destinationCityItems = <View></View>;
        if(destinationCities){
            destinationCityItems = destinationCities.map(city => {
                return(
                    <Picker.Item
                        key={city.city_id}
                        label={city.city_name}
                        value={city}/>
                )
            });
        }

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
                                    }}
                                    selectedValue={selectedOriginProvince}
                                    onValueChange={this._onOriginProvinceChange}>
                                        <Picker.Item label="Pilih Provinsi" value="" />
                                        {provinceItems}
                                    </Picker>
                                </Item>
                                <Item picker style={{marginTop:15}}>
                                <Picker
                                    mode="dropdown"
                                    style={{
                                        width: undefined
                                    }}
                                    selectedValue={selectedOriginCity}
                                    onValueChange={val => this.setState({selectedOriginCity: val})}
                                    enabled={selectedOriginProvince == "" ? false : true}>
                                        <Picker.Item label="Pilih Kabupaten/Kota" value="" />
                                        {originCityItems}
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
                                    }}
                                    selectedValue={selectedDestinationProvince}
                                    onValueChange={this._onDestinationProvinceChange}>
                                        <Picker.Item label="Pilih Provinsi" value="" />
                                        {provinceItems}
                                    </Picker>
                                </Item>
                                <Item picker style={{marginTop:15}}>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}
                                        selectedValue={selectedDestinationCity}
                                        onValueChange={val => this.setState({selectedDestinationCity : val})}
                                        enabled={selectedDestinationProvince == '' ? false : true}>
                                        <Picker.Item label="Pilih Kabupaten/Kota" value="" />
                                        {destinationCityItems}
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
                                    <Input maxLength={6} onChangeText={val => this.setState({weight: val})}/>
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
                                        }}
                                        selectedValue={courier}
                                        onValueChange={val => this.setState({courier: val})}>
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
                    <Button style={{margin:10, backgroundColor:'#9b59b6'}} block onPress={this._onNavigationToDetail}>
                        <Text style={{color:'#fff', fontWeight:'500'}}>Cek Ongkir</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default Home;