import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';


const MiniCard = (props) =>{
    return(
        <View style={{flexDirection:'row', margin:10}}>
            <Image 
                source={{url:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
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
            >{props.title}</Text>
                <Text style={{fontSize:12}}>{props.channel}</Text>
            </View>
        </View>
    )
}

export default MiniCard;