import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const MiniCard = () =>{
    return(
        <View style={{flexDirection:'row', margin:10}}>
            <Image 
                source={{url:'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&w=1000&q=80'}}
                style={{
                    width:'40%',
                    height:200
                }}              
            />
            <View style={{
                paddingLeft:7
            }}>
                <Text style={{
                    fontSize:20,
                    width:Dimensions.get('screen').width/2
                }}
                ellipsizeMode='tail'
                numberOfLines={3}
                >Search Video 1 kguyflukiydkglgfugkdil iuurikdkgku igykmd,luigldd</Text>
                <Text style={{fontSize:12}}>Search video subtitle</Text>
            </View>
        </View>
    )
}

export default MiniCard;