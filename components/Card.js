import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Card = () => {
    return(
        <View style={{elevation:5, margin:10}}>
            <Image 
                source={{url:'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}
                style={{
                    width:'100%',
                    height:200
                }}              
            />
            <View style={{
                flexDirection:'row'
            }}>
                <MaterialIcons name='account-circle' size={40} color='#212121' />
                <View style={{margin:7}}>
                    <Text style={{
                        fontSize:18,
                        width:Dimensions.get('screen').width - 80
                    }} 
                    ellipsizeMode='tail'
                    numberOfLines={1}>Thats my new Buddy kdchsoijozihdddddfcsij skjsdchnizdoshf </Text>
                    <Text>mychannel 1st video</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;