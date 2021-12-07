import React, { Component } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import jwtDecode from 'jwt-decode';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Consultas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }

    listarProjetos = async () => {
        try {

           
            const token = await AsyncStorage.getItem('userToken');

           // console.warn(jwtDecode(token));

            //role = ({jwtDecode(token).role};

           // console.warn(jwtDecode(token).role);


       
           const resposta = await api.get('/Projetos', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        if (resposta.status === 200) {
            isLoading = false;
            const dadosApi = resposta.data;
            this.setState({ listaProjetos: dadosApi });
            // console.warn(listaProjetos)
        }



        } catch (error) {
            console.warn(error);
        }
    };


    componentDidMount() {
        this.listarProjetos();
    }



    render() {
        return (
            <View>
               <FlatList
                //contentContainerStyle={styles.mainBodyContent}
                data={this.state.listaProjetos}
                keyExtractor={item => item.idProjeto}
                renderItem={this.renderItem}/>
            </View>
        )
    }

    renderItem = ({ item }) => (
        
        <View>
           <View>
               <View style={styles.topoColorido}>
                   <Text>{item.idTemaNavigation.nomeTema}</Text>
               </View>
               <View>
                   <Text>{item.nomeProjeto}</Text>
                   <Text>Descrição: {item.descricaoProjeto}</Text>
               </View>

           </View>
        </View>
       
    )


}

const styles = StyleSheet.create({
    
    topoColorido:{
        backgroundColor: 'FF00D5'
    },

})
