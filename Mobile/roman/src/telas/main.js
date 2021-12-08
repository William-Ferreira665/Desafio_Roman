import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Login from './login';
import Cadastro from './cadastroProjetos';

//importar perfil, cadastro e listagem

export default class Main extends Component {



    logout = async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          this.props.navigation.navigate('Login'); //tem que ser mesmo nome.
        } catch (error) {
          console.warn(error);
        }
      };



    render() {
        return (
            <ImageBackground source={require('../imagens/fundo_navigation.png')} style={StyleSheet.absoluteFillObject}>
                <View style={styles.navigation}>
                    <bottomTab.Navigator
                    //LISTAGEM
                    initialRouteName='Cadastro'

                    screenOptions={({route}) => ({
                        tabBarIcon: () => {
                            //Projetos-listagem
                            if (route.name === 'Projetos') {
                                return(
                                    <Image
                                      source={require('../imagens/document.png')}
                                      style={styles.iconeNavigationListar}
                                    />
                                  )
                            }
                            //Projetos-cadastro
                            if (route.name === 'Cadastro') {
                                return(
                                    <Image
                                      source={require('../imagens/mais.png')}
                                      style={styles.iconeNavigationCadastrar}
                                    />
                                  )
                            }
                            //perfil
                            //logout
                            else {
                                return(
                                    <TouchableOpacity
                                    onPress={this.logout}>
                                    <Image
                                      source={require('../imagens/logout.png')}
                                      style={styles.iconeSair}
                                    />
                                </TouchableOpacity>
                                  )
                            }
                        }
                    })}

                    >
                    <bottomTab.Screen name="Cadastro" component={Cadastro} />
                    </bottomTab.Navigator>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    navigation: {
        flex: 1,
        // alignItems: 'center'
    },

    // iconeNavigationListar:{

    // },

    // iconeNavigationCadastrar: {},

    // iconeSair: {}

});