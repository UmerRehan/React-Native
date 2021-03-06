import React,{useState} from "react";
import { StyleSheet, Text, View,Image,FlatList,Modal } from 'react-native';
import { Card,Title,FAB,TextInput ,Button } from 'react-native-paper';

export default function CreateEmployee() {

    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Phone, setPhone] = React.useState("");
    const [Position, setPosition] = React.useState("");
    const [Picture, setPicture] = React.useState("");
    const [Address, setAddress] = React.useState("");
    const [VModal, setVModal] = React.useState(false);

    return (
      <View style={styles.container}>

       <TextInput
          style={styles.input}
          label="Name"
          value={Name}
          mode="outlined"
          onChangeText={text => setName(text)}
        />
       <TextInput
          style={styles.input}
          label="Position"
          value={Position}
          mode="outlined"
          onChangeText={text => setPosition(text)}
        />
       <TextInput
          style={styles.input}
          label="Email"
          value={Email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
       <TextInput
          style={styles.input}
          label="Address"
          value={Address}
          mode="outlined"
          onChangeText={text => setAddress(text)}
        />
       <TextInput
          style={styles.input}
          label="Phone"
          value={Phone}
          mode="outlined"
          onChangeText={text => setPhone(text)}
        />

        <Button icon="camera" color="#009ea1" style={styles.input} mode="contained" onPress={() => setVModal(true) }>
        Upload File
        </Button>
        <Button icon="camera" color="#009ea1" style={styles.input} mode="contained" onPress={() => console.log('Pressed')}>
        Save
        </Button>


        <Modal 

        visible={VModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
        setVModal(false);
        }}  
        >

          <View style={styles.modalview} >

            <View style={styles.modalbutton}>

            <Button icon="camera" style={styles.input} color="#009ea1" mode="contained" onPress={() => console.log('Pressed')}>
                  Camera
            </Button>
            <Button icon="image-multiple" style={styles.input} color="#009ea1" mode="contained" onPress={() => console.log('Pressed')}>
                Gallery
            </Button>

            <View style={{alignItems:"center"}}>

            <Button icon="arrow-left-circle" style={{margin:10,width:120}} color="#009ea1" mode="contained" onPress={() => setVModal(false)}>
                Back
            </Button>

            </View>

            </View>

            </View>

        </Modal>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    input:{
        margin:10,
    },
    modalview: {
      position: "absolute",
      bottom: 2,
      width: "100%",
      backgroundColor: "white",
  
    },
    modalButton:{
      flexDirection:"row",
      justifyContent:"space-evenly"
    }
  });