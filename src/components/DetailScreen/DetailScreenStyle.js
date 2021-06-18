import {StyleSheet} from 'react-native';
import Colours from '../../Utils/ColourConstants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colours.offWhite,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  image: {width: '100%', height: '40%'},
  dataContainer: {paddingTop: 24, padding: 16},
  collectionName: {
    fontSize: 16,
    color: Colours.TextBlue,
    textAlign: 'center',
  },
  trackName: {
    fontSize: 22,
    color: Colours.TextBlue,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 18,
    color: Colours.TextBlue,
    textAlign: 'center',
  },
  separator: {
    height: 5,
    backgroundColor: Colours.TextBlue,
    marginTop: 16,
  },
  releaseDate: {
    fontSize: 12,
    color: Colours.TextBlue,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: Colours.TextBlue,
    fontWeight: 'bold',
  },
  dateContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  collectionContainer: {
    paddingTop: 16,
  },
  collectionPrice: {
    textAlign: 'center',
    fontSize: 16,
    color: Colours.grey,
    fontWeight: 'bold',
  },
});
