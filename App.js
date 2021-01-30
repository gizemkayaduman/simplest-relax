import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, 
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sound from 'react-native-sound';

import { homeStyles as styles } from './styles';
import images from './img/images';
import PlaySound from './playsound/playSound';
import DetailsScreen from './DetailsScreen';
 

function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={['#FFF', '#e0dfd5']} style={{
      alignItems: 'center',
      justifyContent: 'center', flex: 1
    }}>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
    <ImageBackground source={images.tea} style={styles.ImageStyle} borderRadius={10} >
      <LinearGradient colors={['rgba(67,146,241,0.5)', 'rgba(	113,60	,183,0.5)']}
        style={{
          position: "absolute",
          borderRadius: 10,
          height: 120,
          width: 250,
          justifyContent: "center",
          alignItems: "center",
          textAlign: 'center',
          alignContent: "center",
          flex:1
        }}>
        <Text style={styles.TextStyle}>Relax</Text>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity >
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <ImageBackground source={images.meditasyon} style={styles.ImageStyle} borderRadius={10} >
          <LinearGradient colors={['rgba(67,146,241,0.5)', 'rgba(	113,60	,183,0.5)']}
            style={{
              position: "absolute",
              borderRadius: 10,
              height: 120,
              width: 250,
              justifyContent: "center",
              alignItems: "center",
              textAlign: 'center',
              alignContent: "center",

            }}>
            <Text style={styles.TextStyle}>Meditasyon</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </LinearGradient>
  );
}

function  MeditateButton  ({navigation:{ navigate }},props) {
  return 
}
function Playing() {
  return (
    
      <LinearGradient colors={['#FFF', '#e0dfd5']} style={{
      alignItems: 'center',
      justifyContent: 'center', flex: 1
    }}>
      <Image style={{width: 250,height: 250,marginLeft:20, resizeMode:'cover'}} source={images.record} />
      <PlaySound/>
      <Image style={{width:420,height: 220 }} source={images.soundwave} />
      </LinearGradient>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Simplest Relax' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Pick You Need' }} />
        <Stack.Screen name="Playing" component={Playing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;