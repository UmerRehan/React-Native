import { StyleSheet, Text, View,Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <View style={styles.container}>

<LinearGradient

colors={['#009ea1','#081c1c']}
style={styles.cover}

/>

<View style={{ alignItems:'center'}}>

<Image 
source={{uri:"https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"}}
style={styles.img}
/>

<Title>Umer Rehan</Title>
<Text>Hello World!!!</Text>

</View>

    <View style={styles.mainview}>

      <Card style={styles.card}>
        <MaterialIcons name="email" size={20} color="black" />
        <Text>abc@gmail.com</Text>
      </Card>
    
    </View>
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover:{
    height:220,
    
  },
  img:{
    marginTop:-95,
    height:170,
    width:170,
    borderRadius:170/2,
  },
  mainview:{
    marginTop:50,
    margin:10,
  },
  card:{
    flexDirection:'row',
  }


});