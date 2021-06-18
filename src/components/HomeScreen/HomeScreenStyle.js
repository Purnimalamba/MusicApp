import {StyleSheet} from 'react-native';
import Colours from '../../Utils/ColourConstants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colours.offWhite,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {width: 70, height: 70},
  dataContainer: {paddingLeft: 10, paddingTop: 8},
  artistContainer: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  collectionName: {
    fontSize: 12,
    color: Colours.TextBlue,
  },
  artistName: {
    fontSize: 16,
    color: Colours.TextBlue,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    paddingLeft: 20,
    color: Colours.TextBlue,
  },
  separator: {
    height: 0.3,
    backgroundColor: Colours.lineColour,
  },
});
