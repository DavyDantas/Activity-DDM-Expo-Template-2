import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type ItemsProps = {
    text: string,
    color: string,
    colorText: string
}


export default function Button(props: ItemsProps) {
    return(
        <View>
            <TouchableOpacity style={[styles.button,{backgroundColor: props.color}]}>
                <Text style={{fontFamily:'Poppins' ,color:props.colorText, fontSize:16, fontWeight: '600'}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

    const styles = StyleSheet.create({
        button:{
            width: 150,
            height: 40,
            justifyContent:"center",
            alignItems:"center",
            borderRadius: 8,
        }

    })

