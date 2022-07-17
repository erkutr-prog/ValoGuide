import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import MapCard from '../components/MapCard';

var colors = require('./../src/colors.js');

function Maps(props) {
  const [mapInfo, setMapInfo] = useState([]);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        title: {
          text: 'Maps',
        },
      },
    });

    getMaps();
  }, [getMaps]);

  const getMaps = useCallback(async () => {
    const options = {
      method: 'GET',
      headers: {
        language: 'tr-TR',
      },
    };

    const response = await fetch('https://valorant-api.com/v1/maps', options)
      .then(response => response.json())
      .then(response => setMapInfo(response.data))
      .catch(err => console.error(err));
  });

  const renderItem = ({item}) => (
    <MapCard onPress={() => navigateToDetails(item)} item={item} />
  );

  function navigateToDetails(item) {
    Navigation.push(props.componentId, {
      component: {
        name: 'MapDetails',
        passProps: {
          bigPicture: item.splash,
          sketch: item.displayIcon,
        },
        options: {
          bottomTabs: {
            visible: false,
          },
          topBar: {
            title: {
              text: item.displayName,
            },
          },
        },
      },
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginTop: 10}}
        data={mapInfo}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PAGE_BACKGROUND,
  },
});

export default Maps;
