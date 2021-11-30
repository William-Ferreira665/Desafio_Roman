import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';

const bottomTab = createBottomTabNavigator();

//importar perfil, cadastro e listagem

export default class Main extends Component {
    render() {
        return (
            <ImageBackground source={require('../imagens/fundo_navigation.png')} style={StyleSheet.absoluteFillObject}>
                <View style={styles.navigation}>
                    <bottomTab.Navigator
                    //LISTAGEM
                    // initialRouteName='Eventos'

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
                        }
                    })}

                    >
                    {/* <bottomTab.Screen name="Perfil" component={Perfil} /> */}
                    </bottomTab.Navigator>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    navigation: {
        flex: 1,
        alignItems: 'center'
    },

    iconeNavigationListar:{

    }
});