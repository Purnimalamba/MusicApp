import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './HomeScreenStyle';
import React, {useEffect, useState} from 'react';
import ApiService from '../../Services/ApiService';
import Colours from '../../Utils/ColourConstants';

export default function HomeScreenComponent(props) {
  const [musicList, setMusicList] = useState([]);
  const [isLoading, setLoaderValue] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // function call to get music list
    getMusicList();
  }, [musicList]);

  // function to get music list and set response in state
  async function getMusicList() {
    const musicData = await ApiService.getMusicList();
    // set the api response
    setMusicList(musicData);
    // setting loader false after 2 sec as api response is fast and loader is not showing up
    setTimeout(() => setLoaderValue(false), 2000);
    // set refresh false after response
    setIsRefreshing(false);
  }

  // function to navigate to detail screen
  function goToDetails(data) {
    props.navigation.navigate('DetailScreen', {musicData: data});
  }

  // function to refresh the list
  function onRefresh() {
    setIsRefreshing(true);
    getMusicList();
  }

  // function to render separator line
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colours.RoyalBlue} />
      ) : (
        <FlatList
          data={musicList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.cardContainer}
              activeOpacity={0.8}
              onPress={() => goToDetails(item)}>
              <Image
                style={styles.image}
                loadingIndicatorSource={{uri: item.previewUrl}}
                source={{uri: item.artworkUrl100}}
              />
              <View style={styles.dataContainer}>
                <Text style={styles.artistName}>{item.artistName}</Text>
                <View style={styles.artistContainer}>
                  <Text style={styles.collectionName}>
                    {item.collectionName}
                  </Text>
                  <Text style={styles.price}>${item.collectionPrice}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={renderSeparator}
          onRefresh={() => onRefresh()}
          refreshing={isRefreshing}
        />
      )}
    </View>
  );
}
