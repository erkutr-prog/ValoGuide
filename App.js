import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';

import AgentCard from './components/AgentCard';

function App(props) {
  const [agentsData, setAgentsData] = useState([]);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        title: {
          text: 'ValoGuide',
        },
      },
    });
    fetchAgents();

  }, [fetchAgents]);

  const fetchAgents = useCallback(async () => {
    const options = {
      method: 'GET',
      headers: {
        'language': 'tr-TR',
        'isPlayableCharacter': true
      },
    };

    const response = await fetch(
      'https://valorant-api.com/v1/agents',
      options,
    )
      .then(response => response.json())
      .then(response => setAgentsData(response.data))
      .catch(err => console.error(err))
      //console.log("data========", response.data);
      //setAgentsData(response.data);
  })

  const renderItem = (item) => (
    <AgentCard agentsData={item} />
  )

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={agentsData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
