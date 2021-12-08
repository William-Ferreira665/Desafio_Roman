import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import api from '../services/api';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'prof@prof',
            senha: '404'
        };
    }


    login = async () => {

        const resposta = await api.post('/Login',
        {
            email: this.state.email, 
            senha: this.state.senha
        });

        const token = resposta.data.token;
        await AsyncStorage.setItem('userToken', token);

        if (resposta.status === 200) {
            this.props.navigation.navigate('Main');
        }

        console.warn(token);

    }


    render() {
        return (
            <ImageBackground source={require('../imagens/fundo_login.png')} style={StyleSheet.absoluteFillObject}>
                <View style={styles.container}>
                    <Image
                        source={require('../imagens/capelo.png')}
                        style={styles.iconeLogin}
                    />
                    <View style={styles.itensLogin}>
                        <TextInput style={styles.inputLogin}
                            placeholder=" Email:"
                            placeholderTextColor="#FFF"
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput style={styles.inputLogin}
                            placeholder=" Senha:"
                            placeholderTextColor="#FFF"
                            keyboardType="default"
                            secureTextEntry={true}
                            onChangeText={senha => this.setState({ senha })}
                        />
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={this.login}>
                            <Text style={styles.btnLoginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconeLogin: {
        height: 90,
        width: 90,
    },

    itensLogin: {
        flex: 0.35,
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    inputLogin: {
        width: 240,
        height: 40,
        borderWidth: 3,
        color: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        borderColor: 'white',
        fontSize: 16
    },

    btnLogin:{
        width: 240,
        height: 45,
        backgroundColor:'#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    btnLoginText:{
        color: '#FD001E',
        fontSize: 16,
        textTransform: 'uppercase'
    }
});