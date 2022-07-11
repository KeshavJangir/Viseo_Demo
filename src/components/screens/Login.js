import React, { useState, useContext, useEffect } from 'react';
import { View,Alert, Image, Dimensions, Text,AsyncStorage, TouchableOpacity, TextInput, Platform } from 'react-native';
import Modal from "react-native-modalbox";
import { userContext } from '../../../App';
const { width, height } = Dimensions.get('window');


const Login = ({ navigation }) => {

    const [userData, setUserData]  = useContext(userContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(userData.isLoggedIn === "true"){
            navigation.replace('Home')
        }
        return () => {
            clearTimeout()
          }
    }, [userData])

    onPressButton = () =>{ 
        if (userName == '' || userName == null) {
            Alert.alert('Please Enter UserName') 
        }else if (password == '' || password == null) {
            Alert.alert('Please Enter Password') 
        }else if (userName == userData.userName && password == userData.passWord){
            AsyncStorage.setItem("isLoggedIn", "true");
            setModalVisible(false)
            Platform.OS === 'ios' ? this.setTimeout(() => { navigation.navigate('Home')},200) : navigation.navigate('Home')
        }
        else{
            Alert.alert('Username and Password is invalid') 
        }
    } 

    const getModal = () => {
        return (
            <Modal
                entry="bottom"
                backdropPressToClose={true}
                isOpen={modalVisible}
                style={{
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    height,
                    width,
                   // position: "absolute",
                    backgroundColor: "transparent"
                }}
                onClosed={() => setModalVisible(false)}
            >
                <View style={{
                   // position: "absolute",
                    bottom: 0,
                    width,
                    height: 300,
                    borderRadius:15,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white"
                }}>

                    <View style={{ width: width,height:300, alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ color:'#000075',height: 38, borderWidth: 1, borderColor: 'gray', width: width - 40, paddingHorizontal: 10, borderRadius:3 }}
                             onChangeText={(text) => setUserName(text)}
                             value={userName}
                             placeholderTextColor="#000075"
                            placeholder="User Name"
                        />
                        <TextInput
                            style={{color:'#000075', height: 38, borderWidth: 1, borderColor: 'gray', width: width - 40, paddingHorizontal: 10, marginTop: 20, borderRadius:3 }}
                             onChangeText={(text) => setPassword(text)}
                             value={password}
                             placeholderTextColor="#000075"
                            placeholder="Password"
                        />

                        <TouchableOpacity
                            onPress={() => onPressButton()}
                            style={{ width: width - 40, height: 40, borderRadius: 5, backgroundColor: '#000075', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{ width: 240, height: 160, marginTop: -40 }}
                source={require('../../assets/images/logo.png')}
            />
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ width: '70%', height: 40, borderRadius: 5, borderColor: '#000075',borderWidth:1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000075' }}>Login</Text>
            </TouchableOpacity>
            {getModal()}
        </View>
    );
}

export default Login;