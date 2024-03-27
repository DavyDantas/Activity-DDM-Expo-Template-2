import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.tittle}>
      <Text style={{fontSize:25}}>Growing</Text>
      </View>
      <View style={styles.main}>
      <Image source={require('./assets/icon.png')} style={styles.mainImage}/>
      <Text style={styles.mainName}>Davy Dantas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  tittle:{
    marginTop: 30,
    width:'90%',
    marginHorizontal: 20,
  },

  main:{
    margin:20,
    marginTop:40,
    width: '85%',
    height:'30%',
    top:0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  mainImage:{
    width: 130,
    height: 130,
    borderRadius: 75,
  },

  mainName:{
    color: '#625b89',
    fontSize: 25,
    fontWeight: '700',
  },

});
