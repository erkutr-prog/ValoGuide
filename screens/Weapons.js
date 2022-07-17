import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import WeaponCard from '../components/WeaponCard';

var colors = require('./../src/colors.js');

function Weapons(props) {
  const [weaponInfo, setWeaponInfo] = useState([]);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        title: {
          text: 'Weapons',
        },
      },
    });

    getWeapons();
  }, [getWeapons]);

  const getWeapons = useCallback(async () => {
    const options = {
      method: 'GET',
      headers: {
        language: 'tr-TR',
      },
    };

    const response = await fetch('https://valorant-api.com/v1/weapons', options)
      .then(response => response.json())
      .then(response => setWeaponInfo(response.data))
      .catch(err => console.error(err));
  });

  const renderItem = ({item}) => <WeaponCard item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginTop: 10}}
        data={weaponInfo}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
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

export default Weapons;
