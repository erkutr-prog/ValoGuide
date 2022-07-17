import { View, Text, Image, Dimensions, ScrollView, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'

var colors = require('./../src/colors.js');

function WeaponDetails(props) {
  const [statArray, setStatArray] = useState([]);
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.push({
      'id': 1,
      'statName': 'Fire Rate',
      'statValue': props.data.weaponStats.fireRate
    });
    statsRef.current.push({
      'id': 2,
      'statName': 'First Bullet Accuracy',
      'statValue': props.data.weaponStats.firstBulletAccuracy
    });
    statsRef.current.push({
      'id': 3,
      'statName': 'Magazine Size',
      'statValue': props.data.weaponStats.magazineSize
    });
    statsRef.current.push({
      'id': 4,
      'statName': 'Reload Time(s)',
      'statValue': props.data.weaponStats.reloadTimeSeconds
    });
    statsRef.current.push({
      'id': 5,
      'statName': 'Wall Penetration',
      'statValue': props.data.weaponStats.wallPenetration.split('::')[1]
    })
    setStatArray(statsRef.current);
  }, [])

  const renderItem = ({item}) => (
    <View style={styles.statItemContainer}>
      <Text style={styles.statText}>{item.statName}</Text>
      <Text style={[styles.statText, {marginLeft: 'auto'}]}>{item.statValue}</Text>
    </View>
  )

  const renderHeader = () => (
    <View style={styles.headerContainer}> 
      <Text style={styles.header}>Stats</Text>
    </View>
  )


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode='contain' source={{uri: props.data.displayIcon}}/>
        <Text style={styles.category}>{props.data.shopData.category}</Text>
      </View>
      <View style={styles.statContainer}>
        {statArray.length == 0 ? 
        <ActivityIndicator style={{alignSelf: 'center'}} size={'large'}/>
        :
          <FlatList
          data={statsRef.current}
          ListHeaderComponent={renderHeader}
          keyExtractor={item => item.id}
          renderItem={renderItem}/>
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PAGE_BACKGROUND, 
    flexDirection: 'column'
  },
  imageContainer: {
    backgroundColor: colors.CONTAINER_BACKGROUND, 
    margin: 10
  },
  image: {
    height: Dimensions.get('screen').height / 3, 
    width: Dimensions.get('screen').width - 15
  },
  category: {
    color: colors.TEXT, 
    margin: 5
  },
  statContainer: {
    height: Dimensions.get('screen').height / 2, 
    width: Dimensions.get('screen').width - 3
  },
  statItemContainer: {
    height: Dimensions.get('screen').height / 30, 
    width: Dimensions.get('screen').width - 5, 
    backgroundColor: colors.CONTAINER_BACKGROUND, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginHorizontal: 5, 
    marginBottom: 3
  },
  statText: {
    color: colors.TEXT,
    textAlign: 'center', 
    margin: 5
  },
  headerContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  header: {
    alignSelf: 'center', 
    color: colors.TEXT_CONTAINER_BACKGROUND, 
    fontWeight: 'bold', 
    fontSize: 30
  }
})

export default WeaponDetails;