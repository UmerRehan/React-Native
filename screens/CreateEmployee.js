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


        <Modal visible="VModal"  >
            <Button icon="camera" style={styles.input} mode="contained" onPress={() => console.log('Pressed')}>
                  Camera
            </Button>
            <Button icon="camera" style={styles.input} mode="contained" onPress={() => console.log('Pressed')}>
                Gallery
            </Button>

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
    }
  });