import React ,{useState} from 'react';
import {View, Text, Image,  StyleSheet,}  from 'react-native';

const Headers = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}> {title} </Text>
        </View>
    )
}
export default Headers;
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor:'darkslateblue',
        alignItems:'center'
    },
    text: {
        color: '#fff',
        fontSize: 23,
    }
})
