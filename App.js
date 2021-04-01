import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalList from './Comonents/GoalList';
import GoalInput from './Comonents/GoalInput';

export default function App() {
  const [goals, setgoals] = useState([]);
  const [isModalOpen,setmodal] = useState(false);


  const goalsList = (courseText) => {
    console.log("inside app file");
    // setgoals(currentGoals => [...currentGoals,courseText]);
    setgoals(currentGoals => {
      return [...currentGoals,{id: Math.random().toString(),value: courseText}]
    });
     setmodal(false);
    console.log("isModalOpen",isModalOpen);
  }

  const removeGoalsList = () => {
    setmodal(false);
  }

  const deleteItem = (goalId) => {
    setgoals(currentGoals => {
      return goals.filter(goal => goal.id != goalId);
    });
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={()=>setmodal(true)}/>
<GoalInput goalsList={goalsList} isModalOpen={isModalOpen} removeGoalsList={removeGoalsList}/>
      {/* <ScrollView>
        {goals.map((goal) => {
        return <View key={goal} style={styles.goalList}><Text>{goal}</Text></View>
        })}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <GoalList deleteItem={deleteItem} itemId={itemData.item.id} title={itemData.item.value}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  goalList : {
    marginVertical: 10,
    padding: 5,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    color: 'white'
  }
});
