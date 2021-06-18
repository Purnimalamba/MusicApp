import AppUrls from '../Config/UrlConfig';
const ApiService = {};

ApiService.getMusicList = async () => {
  try {
    let response = await fetch(AppUrls.getMusicListURL);
    let listdata = await response.json();
    return listdata.results;
  } catch (error) {
    console.error(error);
  }
};

export default ApiService;
