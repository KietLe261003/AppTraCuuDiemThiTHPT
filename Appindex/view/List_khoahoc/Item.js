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
function Item(props){{
    let {uri,NameKhoahoc,NameGiaovien,DateEnd,Price}=props.mItem
    const hehe =()=> alert('hehe')
    return <TouchableOpacity>
        <View style={styles.Listmain}>
            <Image style={styles.hinh} source={{
                uri: `${uri}`
            }}>
            </Image>
            <View style={styles.left}>
                <Text
                    style={{ fontSize: 18, fontWeight: 'bold', color: "0043A8",marginTop: 5,marginBottom: 10 }}
                >
                    {NameKhoahoc}</Text>
                <Text 
                    style={{marginBottom: 3}}
                >
                   Tên giáo viên: {NameGiaovien}
                </Text>
                <Text
                    style={{marginBottom: 3}}
                >
                   Ngày hết hạn: {DateEnd}
                </Text>
                <Text>
                    Giá: {Price}
                </Text>
                <View style={styles.btn}>
                    <TouchableOpacity 
                        onPress={hehe}
                        style={{backgroundColor: 'blue'}}>
                        <Text style={{ fontSize: 20 }}>Đặt mua</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}}
var styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    Listmain: {
        height: 200,
        marginHorizontal: 5,
        borderRadius: 5,
        flexDirection: 'row',
    },
    hinh: {
        marginTop: 5,
        width: 120,
        height: 120,
        borderBottomStartRadius: 5
    },
    left: {
        flex: 1,
        marginLeft: 5,
    },
    btn: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Item;