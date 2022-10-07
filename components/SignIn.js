import {useState, React} from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput } from 'react-native';
import {firebase} from './config';

export default function SignIn ({navigation}) {
const [email , setEmail] =useState('');
const [password , setPassword] =useState('');

const nextpage = (()=>{
     navigation.navigate('Home')

  })


return(
<View style={styles.container}>


<TextInput placeholder="Enter Email"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TextInput placeholder="Enter Password"style = {styles.input} onChangeText={(task =>setTask(task))}/>

<TouchableOpacity style={styles.btn}


 onPress={nextpage}

 >
<Text> SignIn </Text>

</TouchableOpacity>

 </View> 

  );
}




const styles = StyleSheet.create({
  container: {
  },
  
  
 input: {
    width: 350,
    height:50,
    backgroundColor: 'white',
    padding:12,
    borderRadius:15,
    margin:10,
  
  },
  btn: {
    backgroundColor:'brown' ,
    width:100,
    height:40,
    marginLeft:85,
    marginTop:50,
    paddingLeft:12,
    paddingTop:15,
    borderRadius:20,
   
  },

  
  });