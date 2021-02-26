/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native';
import Headers from './components/Headers';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';
import uuid from 'react-native-uuid';
const items = [
  {
    id: uuid.v1(), 
    text:'Milk'
  },
  {
    id:uuid.v1(), 
    text:'Rice'
  },
  {
    id: uuid.v1(), 
    text:'Coffe'
  },
  {
    id: uuid.v1(), 
    text:'Vegetable'
  }
]
const App = () => {
  const [data, setData] = useState(items)


  const deleteItem = (id) => {
    console.log("iddd", id)
    setData( prevData => {
      return prevData.filter(item => item.id !== id)
    }
    )
  }

  const addItem = (text) => {
    setData( prevData => {
      return [{id: uuid.v1(),  text}, ...prevData]
    });
  }

  return (
    <View style={styles.container}>
      <Headers title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={data} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem = {deleteItem}/>
        )}
        keyExtractor={item => item.id}
      />
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default App;
