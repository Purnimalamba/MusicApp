import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {styles} from './DetailScreenStyle';
import * as React from 'react';

export default function HomeScreenComponent(props) {
  const {musicData} = props?.route?.params;

  // function to open collection URL using LInking
  const openUrl = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  // function to convert millisecond to minute
  const millisToMins = millis => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={styles.image}
          loadingIndicatorSource={{uri: musicData.previewUrl}}
          source={{uri: musicData.artworkUrl100}}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.collectionName}>
            {millisToMins(musicData?.trackTimeMillis)} (
            {musicData?.primaryGenreName})
          </Text>
          <Text style={styles.trackName}>{musicData?.trackName}</Text>
          <Text style={styles.artistName}>by {musicData?.artistName}</Text>
          <Text style={styles.collectionName}>{musicData?.collectionName}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.dateContainer}>
          <View>
            <Text style={styles.releaseDate}>Released On:</Text>
            <Text style={styles.releaseDate}>
              {new Date(musicData?.releaseDate).toDateString()}
            </Text>
          </View>
          <Text style={styles.price}>${musicData?.trackPrice}</Text>
        </View>
        <View style={styles.separator} />
        <TouchableOpacity
          style={styles.collectionContainer}
          activeOpacity={0.8}
          onPress={() => openUrl(musicData?.collectionViewUrl)}>
          <Text style={styles.collectionPrice}>See Full Collection... </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
