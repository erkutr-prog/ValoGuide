import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';

function MapCard(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.container}>
      <Image style={styles.image} source={{uri: props.item.listViewIcon}} />
      <View style={styles.textContainer}>
        <Text>{props.item.displayName}</Text>
        <Text style={styles.coordinates}>{props.item.coordinates}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    backgroundColor: 'beige',
  },
  image: {
    height: Dimensions.get('screen').height / 10,
    width: Dimensions.get('screen').width - 15,
  },
  textContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  coordinates: {
    marginLeft: 'auto',
  },
});

export default MapCard;
