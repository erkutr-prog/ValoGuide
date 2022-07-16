import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';

import AgentCard from '../components/AgentCard';

function Agents(props) {
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
        language: 'tr-TR',
        isPlayableCharacter: true,
      },
    };

    const response = await fetch('https://valorant-api.com/v1/agents', options)
      .then(response => response.json())
      .then(response => setAgentsData(response.data))
      .catch(err => console.error(err));
  });

  const renderItem = item => (
    <AgentCard onPress={() => navigateToDetails(item.item)} agentsData={item} />
  );

  function navigateToDetails(item) {
    Navigation.push(props.componentId, {
      component: {
        name: 'AgentDetails',
        passProps: {
          item,
        },
        options: {
          bottomTabs: {
            visible: false,
          },
        },
      },
    });
  }

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

export default Agents;
