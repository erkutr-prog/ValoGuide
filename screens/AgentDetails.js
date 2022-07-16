import { View, Text, Image, Dimensions, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Navigation } from 'react-native-navigation';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

function AgentDetails(props) {
  const isCarousel = React.useRef(null);
  const [carouselData, setCarouselData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId,{
      topBar: {
        title: {
          text: props.item.displayName
        }
      }
    })
    if (props.item.fullPortrait && props.item.fullPortraitV2) {
      let dataArray = [];
      dataArray.push({'img': props.item.fullPortrait})
      dataArray.push({'img': props.item.fullPortraitV2});
      setCarouselData(dataArray);
    }
    setSkillData(props.item.abilities);
  }, [])

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.carouselContainer} key={index}>
      <Image source={{uri: item.img}} style={styles.image}/>
    </View>
    )
  }

  const skillSeperator = ({item}) => {
    return (
      <View
      style={styles.seperator}
    />
    )
  }

  const abilityHeaderComponent = ({item}) => {
    return (
      <Text style={styles.abilityHeader}>
        Abilities
      </Text>
    )
  }

  const renderSkillItem = ({item, index}) => {
    return (
      <View style={styles.skillItemContainer}>
        <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 50, height: 50}} source={{uri: item.displayIcon}}/>
        </View>
        <View style={{flex: 0.8,flexDirection: 'column'}}>
          <Text style={{paddingBottom: 10, fontWeight: 'bold', fontFamily: 'Optima'}}>{item.displayName}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    )
  }

  function getHeroDescription() {
    return (
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={{fontWeight: 'bold', paddingBottom: 10, fontSize: 20, fontFamily: 'Optima'}}>{props.item.displayName}</Text>
          <Text style={{fontSize: 15, fontFamily: 'Optima'}}>{props.item.description}</Text>
        </View>
      </ScrollView>
    )
  }

  function getHeroSkills() {
    return (
      <View style={styles.abilityListContainer}>
        <FlatList
        data={skillData}
        renderItem={renderSkillItem}
        keyExtractor={(item) => item.slot}
        ItemSeparatorComponent={skillSeperator}
        ListHeaderComponent={abilityHeaderComponent}
        />
      </View>
    )
  }
  

  return (
    <View style={styles.container}>
        <Carousel 
          style={{height: Dimensions.get('screen').height / 5}}
          data={carouselData}
          renderItem={renderItem}
          ref={isCarousel}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          layout='default'
          onSnapToItem={(index) => setCurrentIndex(index)}
          />
      <View style={{height: Dimensions.get('screen').height / 2}}>
        {currentIndex == 0 ? (
          getHeroDescription()
        ) :
          getHeroSkills()
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: '#FFFFFF', 
    paddingBottom: 10
  },
  carouselContainer: {
    backgroundColor: '#FFFBF5',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  seperator: {
    height: 1,
    width: "90%",
    backgroundColor: "#607D8B",
    justifyContent: 'center',
    alignSelf: 'center'
  },
  abilityHeader: {
    fontWeight: 'bold', 
    fontSize: 20, 
    alignSelf: 'center', 
    fontFamily: 'Optima'
  },
  abilityListContainer: {
    flexDirection: 'column', 
    marginBottom: 50, 
    paddingTop: 10
  },
  descriptionContainer: {
    paddingHorizontal: 20, 
    paddingTop: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  skillItemContainer: {
    flexDirection: 'row', 
    backgroundColor: '#FD4556', 
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 10
  }
})

export default AgentDetails;