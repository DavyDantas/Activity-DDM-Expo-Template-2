import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from './components/LargeButton'
import ItemList from './components/ListItem'
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {

  const [Fonts] = useFonts ({
    'Poppins': Poppins_400Regular,
})

  return (
    <View style={styles.container}>
      <StatusBar style='auto'></StatusBar>

      <View style={styles.tittle}>
      <Text style={{fontSize:25}}>Growing</Text>
      </View>

      <View style={styles.main}>
      <Image source={require('./assets/icon.png')} style={styles.mainImage}/>
      <Text style={[styles.mainName, {fontFamily:'Poppins'}]}>Davy Dantas</Text>
      </View>

    <View style={styles.divButtons}>
      <Button text="View Profile" color="#dedfe3" colorText='#959597'/>
      <Button text="Add User" color="#719a70" colorText='white'/>
    </View>

    <View style={{marginTop:10}}>
      <ItemList name='Damião Teodósio de Oliveira Filho' image={require('./assets/icon.png')} value={360} />
      <ItemList name='João Pedro' image={require('./assets/icon.png')} value={-120} />
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

  divButtons:{
    width:'90%',
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: "space-between",
  },

  tittle:{
    width:'90%',
    marginHorizontal: 20,
    fontFamily:'Poppins'
  },

  main:{
    margin:10,
    width: '90%',
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
    fontFamily:'Poppins',
    color: '#625b89',
    fontSize: 28,
    fontWeight: '700',
  },

});
