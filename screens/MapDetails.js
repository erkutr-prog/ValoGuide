import {
  Image,
  ImageBackground,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

function MapDetails(props) {
  const [isPictureLoaded, setIsPictureLoaded] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        onLoadEnd={() => setIsPictureLoaded(true)}
        style={styles.image}
        source={{uri: props.bigPicture}}>
        <ActivityIndicator
          style={{
            alignSelf: 'center',
            display: isPictureLoaded ? 'none' : 'flex',
          }}
        />
      </ImageBackground>
      <Image style={styles.image} source={{uri: props.sketch}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width - 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapDetails;
