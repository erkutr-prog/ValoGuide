import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, {useEffect, useRef} from 'react';

function AgentCard(props) {
  useEffect(() => {
  }, []);

  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.cardContainer}>
      <View
        style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: props.agentsData.item.displayIcon}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.agentText} >{props.agentsData.item.displayName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
  },
  imageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#FCF8E8',
    margin: 10,
    flexDirection: 'column',
  },
  image: {
    width: 100, 
    height: 100, 
    margin: 10, 
    alignSelf: 'center'
  },
  agentText: {
    alignSelf: 'center', 
    fontWeight: '500'
  }
});

export default AgentCard;
