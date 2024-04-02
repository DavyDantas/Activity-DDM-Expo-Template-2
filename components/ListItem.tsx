import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

type ItemProps={
    name: string,
    image: any,
    value: number
}


const valueView = (value:number)=>{
    if (value < 0) {
        return(
            <View style={[styles.div2, {backgroundColor: '#f0e1df'}]}>
                <FontAwesome name="caret-down" size={24} color="#FF3B30"/>
                <Text style={{fontFamily:'Poppins' ,marginLeft:10, fontWeight:'700', color:'#FF3B30'}}>{value}</Text>
            </View>
        )
    } 
    else {
        return(
            <View style={[styles.div2, {backgroundColor: '#dae9db'}]}>
                <FontAwesome name="caret-up" size={24} color="#007e01"/>
                <Text style={{fontFamily:'Poppins' ,marginLeft:10, fontWeight:'700', color:"#007e01"}}>+{value}</Text>
            </View>
        )
    }
}

export default function Item(props: ItemProps){
    return(
        <View  style={styles.container}> 

            <View style={[styles.div1]}>
                <Image source={props.image} style={styles.img}/>
                <Text style={{ fontFamily:'Poppins' ,flexShrink:1, fontWeight:'500', color:'#7f7f7f'}}>{props.name}</Text>
            </View>

            <View style={{flexDirection:'row'}}>         
                    {valueView(props.value)}

                    <View  style={styles.div3}>
                        <MaterialIcons name="person-add" size={24} color="#7f7f7f" />
                    </View>
            </View>


        </View>
    )
}

const  styles = StyleSheet.create({
    container:{
      flexDirection:'row',  
      justifyContent:"space-between",
      alignItems:"center",
      height:'auto',
      width:"90%",
      margin: 10,
    },

    div1:{
        flexDirection:'row',
        alignItems: 'center' ,
        maxWidth:'auto',
        flex:1
    },

    div2:{
        flexDirection:'row',
        alignItems: 'center' ,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:8,
    },

    div3:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dddddd',
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginLeft:6,
        borderRadius:8,
    },

    img:{
        resizeMode:"contain" ,
        marginRight :10,
        height:50,
        width:50,
        borderRadius: 25,
    },
})