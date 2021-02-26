import React ,{useState} from 'react';
import {View, Text, Image,  StyleSheet,TouchableOpacity}  from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ListItem = ({item,deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listitem}>
            <View style={styles.listitemView}>
                <Text style={styles.listitemText}> {item.text} </Text>
                <Icon name="remove" size={25} color="firebrick" onPress = {() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    listitem: {
        height: 60,
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listitemView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    listitemText: {
        fontSize: 18,
        color: '#000'
    }
})
