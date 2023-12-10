import React, { Component, useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {cheackUser,cheackPassword} from '../function/cheacklogin'
function Login(props){
    const[Name,setName] = useState('')
    const[EUsername,setEUsername] = useState('')

    const[Password,setPassword] = useState('')
    const[EPassword,setEPassword] = useState('')

    const[keyboardshow,setkeyboardshow] = useState(false)
    useEffect(()=>{
        Keyboard.addListener('keyboardDidShow',() => {
            setkeyboardshow(true)
        })
        Keyboard.addListener('keyboardDidHide',() => {
            setkeyboardshow(false)
        })
    })
    return <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <View style={styles.header} >
            <Image style={styles.Iuser} source={require('../Image/user.png')}/>
            <Text style={styles.Tuser}>Login</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.InputView}>
                <TextInput
                    onChangeText={(text)=>{
                        setEUsername(cheackUser(text)==true ? '':'Tên đăng nhập phải dài hơn 3 ký tự')
                        setName(text)
                    }}
                    placeholder="Tên đăng nhập"
                    style={styles.Input} />
            </View>
            <View style={{
                width: '100%',
                height: 15,
                marginBottom: 10,
                marginTop: 3,
                paddingHorizontal: 10
            }}>
                <Text style={{color: 'red'}}>{EUsername}</Text>
            </View>
            <View style={styles.InputView1}>
                <TextInput
                    onChangeText={(text)=>{
                        setEPassword(cheackPassword(text)==true ? '':'Mật khẩu phải dài hơn 5 ký tự')
                        setPassword(text)
                    }}
                    placeholder="Mật khẩu"
                    style={styles.Input}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.hiden}>
                    <Text>Ẩn</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
                height: 15,
                marginBottom: 5,
                marginTop: 3,
                paddingHorizontal: 10
            }}>
                <Text style={{color: 'red'}}>{EPassword}</Text>
            </View>
            <TouchableOpacity style={{}}>
                <Text style={{ color: 'black' }}>Bạn quên mật khẩu ?</Text>
            </TouchableOpacity>

            {keyboardshow==false && <View style={{width: '100%',alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => {
                        alert(`Xin chào ${Name}`)
                    }}
                    style={styles.btnlogin}>
                    <Text style={{ fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <Text style={{ color: 'black' }}>Đăng ký</Text>
                </TouchableOpacity>
            </View>}
        </View>
        <View style={styles.footer}>
            <View style={styles.Tfooter}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
                <Text
                    style={{
                        fontSize: 15,
                        padding: 8,
                        alignSelf: 'center'
                    }}
                >
                    Hoặc đăng nhập bằng cách khác</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
            </View>
            <View style={styles.icon}>
                <TouchableOpacity style={{width: 40,height: 40,justifyContent: 'center',alignItems: 'center',margin: 50}}>
                    <Image style={styles.ImgIcon} source={require('../Image/google.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 40,height: 40,justifyContent: 'center',alignItems: 'center',margin: 50}}>
                    <Image style={styles.ImgIcon} source={require('../Image/facebook.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
}
var styles=StyleSheet.create({
    container: {
        flex: 100
    },
    header: {
        flex: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Iuser: {
        marginTop: 20,
        width: 150,
        height: 150
    },
    Tuser: {
        marginTop: 15,
        fontSize: 30,
        fontWeight: "bold"
    },
    body: {
        flex: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    InputView: {
        width:"100%",
        height:50,
        justifyContent:"center",
        flexDirection: 'column',
        padding: 20,
        backgroundColor: "#00AEEA",
        borderRadius: 25
    },
    InputView1: {
        width:"100%",
        height:50,
        marginBottom: 5,
        justifyContent:"center",
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: "#00AEEA",
        borderRadius: 25
    },
    Input: {
        height: 50,
        color: 'black',
        width: "90%",
    },
    hiden: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "10%",
        height: 50,
    },
    btnlogin: {
        marginTop: 70,
        backgroundColor: "#F57993",
        width: "100%",
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    footer: {
        flex: 20,
        flexDirection: 'column',
    },
    Tfooter: {
        height: 40,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    icon: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImgIcon: {
        height: 40,
        width: 40,
    }
})
export default Login