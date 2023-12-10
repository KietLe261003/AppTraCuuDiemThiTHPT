import React, { useState } from 'react';
import {
    Alert,
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Button,
    TouchableOpacity
} from 'react-native';
import tinhdiemthi from './canculator'
function Welcome(props) {
    const [cnt,setcnt] = useState(0)
    const onclick = () => setcnt(cnt+1)
    const onclick1=()=> setcnt(cnt-1)
    return <View style={styles.container}>
        <ImageBackground
            source={require('../Image/background.png')}
            resizeMode='cover'
            style={{
                flex: 1,
            }}
        >
            <View style={styles.Header}>
                <Image source={require('../Image/logo.png')} style={styles.logo} />
                <Text style={styles.Text_Header}>Exam Training</Text>
                <View style={{ flex: 1 }} />
                <Image source={require('../Image/question.png')} style={styles.question} />
            </View>
            <View style={styles.body}>
                <Image style={styles.hinh} source={require('../Image/user.png')} />
                <Text style={styles.textWelcome}>Welcome</Text>
                <Text style={styles.textgioithieu}>
                    Chào mừng bạn đến với App luyện thi
                </Text>
                <View style={styles.btn}>
                    <TouchableOpacity 
                    style={styles.btnlogup}
                    onPress={onclick1}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>Logup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.btnlogin}
                    onPress={onclick1}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity
                        style={styles.btnkhach}
                        onPress={onclick}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>Khách</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.footer}>
                    <Text style={styles.ftxt}>Exam Training is 2022</Text>
            </View>
        </ImageBackground>
    </View>
}
var styles = StyleSheet.create({
    container: {
        flex: 100
    },
    Header: { // header
        flex: 5,
        flexDirection: 'row',
        paddingTop: 15
    },
    logo: { //logo
        width: 30,
        height: 30,
        marginHorizontal: 5
    },
    Text_Header: {
        fontSize: 20,
        color: 'white'
    },
    question: { //logo chấm hỏi
        width: 25,
        height: 25,
    },
    body: { //view hình
        flex: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hinh: { //hình
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
    },
    textWelcome: { //text welcome
        fontSize: 40,
        fontWeight: "bold",
        color: 'white',
        marginTop: 10
    },
    textgioithieu: { //đoạn text giới thiệu
        fontSize: 16,
        color: 'white',
        marginBottom: 100
    },
    btn: { // 2 buttin
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnlogin: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        width: 142,
        height: 52,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00AEEA"
    },
    btnlogup: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        width: 142,
        height: 52,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00E99B"
    },
    btnkhach: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        width: 142,
        height: 52,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ftxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
});
export default Welcome