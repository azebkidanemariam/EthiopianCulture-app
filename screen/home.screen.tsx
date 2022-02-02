import React from "react";
import { View,Text,Image,StyleSheet,Pressable } from "react-native";
import { MoodPicker } from "../components/emoji";
import { theme } from "../types/themes";

const imageUrl = 
'https://images.unsplash.com/photo-1640702149643-d172d1463fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'

const Home: React.FC =()=>{
    return(

    <View style={styles.container}>
       
       <Image source={{uri : imageUrl}} style={{ flex:1 }} /> 
          <View style={[StyleSheet.absoluteFill, {justifyContent: 'center'}]}>
             <MoodPicker /> 
          </View>
       
        </View>
    )

}
export default Home

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        
    }
    });
  