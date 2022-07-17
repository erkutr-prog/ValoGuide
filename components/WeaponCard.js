import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'

var colors = require('./../src/colors.js');

function WeaponCard(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.container}>
        <Image style={styles.image} resizeMode='contain' source={{uri: props.item.displayIcon}}/>
        <View style={styles.textContainer}>
            <Text style={styles.texts}>{props.item.displayName}</Text>
            <View style={styles.price}>
                <Image style={{width: Dimensions.get('screen').width / 30, height: 10}} source={require('./../src/assets/credits.png')}/>
                <Text style={styles.texts}>{props.item.displayName != 'Melee' ? props.item.shopData.cost : 0}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginBottom: 10,
      backgroundColor: colors.CONTAINER_BACKGROUND,
    },
    image: {
      height: Dimensions.get('screen').height / 10,
      width: Dimensions.get('screen').width - 15,
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: colors.TEXT_CONTAINER_BACKGROUND
    },
    price: {
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center'
    },
    texts: {
      color: colors.TEXT,
      margin: 5,
      alignSelf: 'center'
    }
  });

export default WeaponCard;