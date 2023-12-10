import React, { Component, useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from "react-native";
function Setting(props) {
    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cài đặt</Text>
        </View>
        <View style={styles.body}>
            <View style={{height: '32%'}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Tài khoản</Text>
                <View style={{
                    marginTop: 5, 
                    flexDirection: 'row',
                    height: 150,}}>
                    <View style={{width: '30%'}}>
                        <Image style={styles.imgUser} source={{uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}} />
                    </View>
                    <View style={{justifyContent: 'center',height: 110,width: '68%',marginLeft: 10,}}>
                        <Text style={{fontSize: 20}}>Lê Tuấn Kiệt</Text>
                        <Text style={{fontSize: 18}}>2124802010277@student.tdmu.edu.vn</Text>
                    </View>
                </View>
            </View>
            <View style={{}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Thông tin tài khoản</Text>
                <TouchableOpacity style={{flexDirection: 'row',marginTop: 5}}>
                    <View style={{width: '30%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Họ và tên</Text>
                    </View>
                    <View style={{flexDirection: 'row-reverse',width: '69%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Lê Tuấn Kiệt</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row',marginTop: 5}}>
                    <View style={{width: '40%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Số điện thoại</Text>
                    </View>
                    <View style={{flexDirection: 'row-reverse',width: '59%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>0123456789</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row',marginTop: 5}}>
                    <View style={{width: '40%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Email</Text>
                    </View>
                    <View style={{flexDirection: 'row-reverse',width: '59%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>HuyenKietcute@gmail.com</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row',marginTop: 5}}>
                    <View style={{width: '40%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tên đăng nhập</Text>
                    </View>
                    <View style={{flexDirection: 'row-reverse',width: '59%'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>HuyenKietcute@gmail.com</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ width: '100%',flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3168/3168315.png' }} />
                <Text style={{marginLeft: 10, fontSize: 20,fontWeight: 'bold'}}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    </View>
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    header: {
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    body: {
        height: '70%',
        flexDirection: 'column',
        marginTop: 10,
    },
    imgUser: {
        //marginTop: 15,
        width: 110,
        height: 110,
    },
    Footer: {
        height: '24%',
        flexDirection: 'column-reverse',
    },
    Menu: {
        height: 50,
        flexDirection: 'row',
    },
    itemMenu: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: "black",
    }
})
export default Setting