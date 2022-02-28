import { StyleSheet, Text, View,Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Title ,Button} from 'react-native-paper';
import { MaterialIcons,Entypo,Feather } from '@expo/vector-icons';

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
        <View style={styles.cardview}>
          <MaterialIcons name="email" size={20} color="black" />
          <Text style={{paddingLeft:20}}>abc@gmail.com</Text>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardview}>
        <Entypo name="location-pin" size={20} color="black" />
          <Text style={{paddingLeft:20}}>Tariq Road</Text>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardview}>
        <Entypo name="phone" size={20} color="black" />
          <Text style={{paddingLeft:20}}>+92 123-9090881</Text>
        </View>
        </Card>

        <View style={styles.btn}>
          <Button color='#009ea1' icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>
            Edit Profile
          </Button>

          <Button color='#009ea1' icon="delete-sweep-outline" mode="contained" onPress={() => console.log('Pressed')}>
            Delete Profile
          </Button>
        </View>

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
    marginTop:40,
    margin:10,
  },
  card:{
    borderRadius:10,
    padding:10,
    marginBottom:15,
  },
  cardview:{
    flexDirection:'row',
  },
  btn:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },


});