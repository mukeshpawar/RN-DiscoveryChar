import React from 'react';
import {SafeAreaView, View, Text, Image,Dimensions} from 'react-native';
import CustomLabel from '../components/CustomLabel';


import appstyles from './styles/appStyles';

const screen = Dimensions.get("screen");

const DetailScreen = ({route, props}) => {
  const imageUrl = route.params.imageUrl;
  console.log('imageUrlimageUrlimageUrl', imageUrl);

  var icon = imageUrl
  ?imageUrl
  :'empty-image.png';

  console.log('iconiconicon', icon);

  const name = route.params.name;
  const videoGames = route.params.videoGames;
  const films = route.params.films;
  const shortFilms = route.params.shortFilms;
  const tvShows = route.params.tvShows;

  return (
    <SafeAreaView style={{flex: 1,}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginHorizontal: 10,
          height: screen.height * 0.8,
          // backgroundColor: 'black',
        }}>
        <Text style={appstyles.labelStyle}> Name :  <CustomLabel text={name}/> </Text>
        {films.length >=1 &&  <Text style={appstyles.labelStyle}> Films :  <CustomLabel text={films}/> </Text>}
        {shortFilms.length >=1 &&  <Text style={appstyles.labelStyle}> Short Films :  <CustomLabel text={shortFilms}/> </Text>}
        {videoGames.length >=1 &&  <Text style={appstyles.labelStyle}> Video Games :  <CustomLabel text={videoGames}/> </Text>}
        {tvShows.length >=1 &&  <Text style={appstyles.labelStyle}> TV Shows :  <CustomLabel text={tvShows}/> </Text>} 
      
        <Image
          style={appstyles.detailLogo}
          source={{
            uri: icon,
          }}
        /> 
       
      </View>
    </SafeAreaView>
  );
}


export default DetailScreen;
