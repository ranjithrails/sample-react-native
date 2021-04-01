import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';


function GoalInput (props) {
  const [courseText, setCourseText] = useState('');
  const updateCourseText = (textVal) => {
    setCourseText(textVal);
}

function setGoalsList() {
  props.goalsList(courseText);
  setCourseText("");
}
function removeGoalsList() {
  props.removeGoalsList();
  setCourseText("");
}

return(
  <Modal visible={props.isModalOpen}>
  <View style={styles.inputContainer}>
  <TextInput placeholder="Course Goal" style={styles.input} onChangeText={updateCourseText} value={courseText}
/>
  <View style={styles.buttonContainer}>
    <View style={styles.buttonStyle}>
  <Button title="ADD" onPress={setGoalsList}/>
  </View>
  <View style={styles.buttonStyle}>
  <Button title="Cancel" color="red" onPress={removeGoalsList}/>
  </View>
  </View>
</View>
</Modal>
);
};


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: '60%',
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  buttonStyle : {
    width: '40%'
  }
});


export default GoalInput;


     