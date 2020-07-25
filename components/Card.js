import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation, useTheme} from '@react-navigation/native';

const Card = (props) => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const textColor = colors.iconColor
    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate('videoPlayer', {videoId:props.videoId, title:props.title})}
        >
        <View style={{elevation:5, margin:10}}>
            <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
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
                        width:Dimensions.get('screen').width - 80,
                        color:textColor
                    }} 
                    ellipsizeMode='tail'
                numberOfLines={1}>{props.title}</Text>
                    <Text style={{
                        color:textColor
                    }}>{props.channel}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default Card;