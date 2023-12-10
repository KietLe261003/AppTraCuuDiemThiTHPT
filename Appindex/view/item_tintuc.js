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
function item_tintuc(props) {
    let {
        img,
        tieude,
        date,
        noidung
    }= props.tintuc
    return <TouchableOpacity>
    <View style={styles.Listmain}>
        <Image style={styles.hinh} source={{
            uri: `${img}`
        }}>
        </Image>
        <View style={styles.left}>
            <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: "0043A8",marginTop: 5,marginBottom: 2 }}
            >
               {tieude}
            </Text>
            <Text
                style={{ fontSize: 13, fontWeight: 'bold', color: "0043A8"}}
            >
                {date}
            </Text>
            <Text
                style={{ fontSize: 13, fontWeight: 'bold', color: "0043A8"}}
            >
               {noidung}
            </Text>
        </View>
    </View>
    <View style={{
                height: 1,
                backgroundColor: 'black',
                width: '100%',
                marginBottom: 3,
                marginTop: 3,
            }}>
        </View>
</TouchableOpacity>
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Listmain: {
        marginHorizontal: 5,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 5
    },
    hinh: {
        marginTop: 5,
        width: 160,
        height: 160,
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
export default item_tintuc