import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function GoalList (props) {
return(<TouchableOpacity onPress={()=>props.deleteItem(props.itemId)}><View style={styles.goalList}>
            <Text>{props.title}</Text>
          </View></TouchableOpacity>);
};


const styles = StyleSheet.create({
  goalList : {
    marginVertical: 10,
    padding: 5,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    color: 'white'
  }
});


export default GoalList;