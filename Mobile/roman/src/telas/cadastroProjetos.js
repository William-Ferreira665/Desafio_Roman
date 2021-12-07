import AsyncStorageLib from '@react-native-async-storage/async-storage';
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

export default class Cadastro extends Component {

    render() {

        return (
            <View>
                <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <ImageBackground source={require("../imagens/fundo_cadastro.png")}>
                    <Image source={require("../imagens/capelo.png")}></Image>
                </ImageBackground>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: center,
                    alignItems: center,
                }}>
                     <TextInput style={styles.inputCadastro}
                            placeholder="Nome do projeto"
                            placeholderTextColor="#C4C4C4"
                            keyboardType="text"
                            onChangeText={NomeProjeto => this.setState({ NomeProjeto })}
                        />
                        <TextInput style={styles.inputCadastro}
                            placeholder="Tema"
                            placeholderTextColor="#C4C4C4"
                            keyboardType="text"
                            onChangeText={IdTema => this.setState({ IdTema })}
                        />
                        <TextInput style={styles.inputCadastro}
                            placeholder="Descrição"
                            placeholderTextColor="#C4C4C4"
                            keyboardType="text"
                            onChangeText={DescricaoProjeto => this.setState({ DescricaoProjeto })}
                        />
                </View>
            </View>
            
                
        )

        
    }

}

const styles = StyleSheet.create({
inputCadastro: {
    width: 240,
    height: 40,
    borderWidth: 3,
    color: '#C4C4C4',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    fontSize: 16,
}
});