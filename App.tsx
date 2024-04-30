import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import backButton from './assets/backButton.png'
import spotifyLogo from './assets/spotifyLogo.png'
import billieBackGround from './assets/billieBackground.png'
import backgroundLines from './assets/backgroundLines.png'
import backgroundLinesTop from './assets/backgroundLinesTop.png'



export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.contentHeader}>
        
        <TouchableOpacity style={styles.headerBackButton}>

          <Image source={backButton}
          style={{width:20, height:20, marginTop:6, marginStart:4,}}/>

        </TouchableOpacity>
        
      </View>

      <View style={styles.contentMain}>

        <Image source={spotifyLogo}
        style={{width:240, height:71, marginTop:16}}/>
        
        <Text style={styles.textTitle}>
        Enjoy listening to music
        </Text>

        <Text style={styles.textSubTitle}>
        Spotify is a proprietary Swedish audio streaming and media services provider
        </Text>

      </View>

      <View style={styles.contentButton}>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButtonRegister}>
            Sign in
          </Text>
        </TouchableOpacity>

      </View>

      <Image style={{ position: 'absolute',
        top: 510,
        width:340,
        height:340,
        left:1 }}
        source={billieBackGround}>
      </Image>
      
      <Image style={{position: 'absolute', left:235, top: 539}} source={backgroundLines}/>
        
      <Image style={{position: 'absolute', left:235}} source={backgroundLinesTop}/>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191717',
  },
  contentHeader: {
    marginTop:37,
    height:100,
    
    alignItems:'flex-start'
  },
  headerBackButton: {
    marginTop:40,
    height:32,
    width:32,
    marginStart:30,
    backgroundColor:'#222020',
    borderRadius:32
  },
  contentMain: {
    
    alignItems:'center',
    height:250,
    width:'100%',
    marginTop:20,
  },
  textTitle: {
    marginTop:55,
    fontSize:26,
    fontWeight:'600',
    letterSpacing:1,
    color:'#F2F2F2',
    textTransform: "capitalize",
    lineHeight: 35,
  },
  textSubTitle: {
    marginTop:21,
    fontSize:17,
    fontWeight:'300',
    textAlign:'center',
    color:'#A0A0A0',
    marginStart:40,
    marginEnd:50,
    lineHeight:25
  },
  contentButton: {
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems:'center',
    height:150,
    width:'100%',
    
  },
  buttonRegister: {
    marginStart:30,
    marginTop:30,
    backgroundColor:'#1ab26b',
    borderRadius:30,
    width:147,
    height:73
  },
  textButtonRegister: {
    marginTop:25,
    fontSize:19,
    fontWeight:'700',
    textAlign:'center',
    color:'#FFFF',
    marginStart:30,
    marginEnd:30,
  },
  buttonLogin: {
    width: 147,
    marginEnd:27,
    alignItems: "center",
    justifyContent: "center",
  },
});
