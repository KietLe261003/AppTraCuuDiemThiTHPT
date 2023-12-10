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
import { Dropdown } from 'react-native-element-dropdown';
import axios from "axios";
import { Nganh } from "../function/Data_bart_chart";
import { school as school } from "../Api_web";
import { cheackNganh } from "../function/cheackNganh";
import Item_tintuc from "./item_tintuc";
import { data_News as data_News } from "../Api_web";
import Danhsach from "./Danhsach";
function Select_school({ navigation }) {
    const [data, setdata] = useState([])
    //const {nameNganh,nameTruong,year2016,year2017}=data;
    const [point, setpoint] = useState(0);
    const [major, setmajor] = useState('');
    const [textDs, settextDs] = useState('');
    const [check, setcheck] = useState(0);

    const [nganh, setnganh] = useState('');
    const [truong, settruong] = useState('');

    //data tin tuc tuyen sinh
    const [Tintuc, setTintuc] = useState([]);
    // useEffect(function Data_News() {
    //     let data = [];
    //     axios.get('http://10.0.2.2:5000/news')
    //         .then(function (response) {
    //             response.data.forEach(item => {
    //                 data.push(item);
    //             })
    //             setTintuc(data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // })
    const[show,setshow] = useState(0);
    const callTintuc = () => {
        let data = [];
        axios.get('http://10.0.2.2:5000/news')
            .then(function (response) {
                response.data.forEach(item => {
                    data.push(item);
                })
                setTintuc(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    function compare(a, b) {
        if (a.year2022 < b.year2022) {
            return -1;
        }
        if (a.year2022 > b.year2022) {
            return 1;
        }
        return 0;
    }
    //Màn hình chính
    const renderMain = () => {
        return <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <View
                        style={styles.header}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            color: 'white'
                        }}>Nhập số điểm dự kiến</Text>

                        {/* text nhập điểm */}
                        <View style={styles.txt}>
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '80%',
                                    color: 'black',
                                    fontSize: 18,
                                }}
                                onChangeText={(text) => {
                                    setpoint(text);
                                }}
                            />
                        </View>

                        {/*dropdown chọn ngành */}
                        <View style={{ width: '80%', height: 80 }}>
                            <Dropdown
                                style={[styles.dropdown]}
                                data={Nganh}
                                search
                                labelField="Name"
                                valueField="Value"
                                placeholder="Chọn tên ngành"
                                onChange={item => {
                                    setmajor(item.Value);
                                }}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                searchPlaceholder="Search..."
                            />
                        </View>

                        {/*nút chọn */}
                        <TouchableOpacity
                            style={styles.btn_chon}
                            onPress={item => {
                                let result = [];
                                axios.get('http://10.0.2.2:5000/web/web2022')
                                    .then(function (response) {
                                        response.data.forEach(function (item1) {
                                            let MyObject = {};
                                            if (item1['maN'] == major && item1['y2022'] <= point) {
                                                MyObject.year2022 = item1['y2022'];
                                                MyObject.nameTruong = item1['nameTruong'];
                                                MyObject.nameNganh = item1['tenN'];
                                                MyObject.maNganh = item1['maN'];
                                                result.push(MyObject);
                                                //debugger;
                                                
                                            }
                                        });
                                        result.sort(compare);
                                        setdata(result);
                                        setshow(1);
                                        settextDs(result.length != 0 ? 'Danh sách các trường' : 'Không có trường nào phù hợp với dữ liệu đã chọn');
                                        //textDs;
                                        //debugger;
                                    })
                                    .catch(function (error) {
                                        debugger;
                                        alert('Trường hoặc ngành bạn chọn không phù hợp')
                                    });
                                //debugger;
                            }}
                        >
                            <Text>Chọn</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{textDs}</Text>

                    {/*duyệt danh sách sau khi chọn ngành*/}
                    <View>
                        {show==1? <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 2 }}>
                                <View style={styles.Ds}>
                                    <Text style={styles.txtDS}>Trường</Text>
                                </View>
                                <View style={{
                                    width: "20%",
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={styles.txtDS}>Điểm</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        width: '10%',
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text>Gợi ý</Text>
                            </TouchableOpacity>
                            </View>: null}
                        {data.map(Eachdata =>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 2 }}>
                                <View style={styles.Ds}>
                                    <Text style={styles.txtDS} key={Eachdata.nameTruong}>{Eachdata.nameTruong}</Text>
                                </View>
                                <View style={{
                                    width: "20%",
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={styles.txtDS}>{Eachdata.year2022}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        setnganh(Eachdata.maNganh);
                                        settruong(Eachdata.nameTruong);
                                        setcheck(1);
                                    }}
                                    style={{
                                        width: '10%',
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text>Gợi ý</Text>
                                </TouchableOpacity>
                            </View>)}
                    </View>
                    {Tintuc.length==0 ? callTintuc() : null}
                    {/*duyệt tin tức */}
                    <View style={styles.body}>
                        <FlatList
                            data={Tintuc}
                            renderItem={({ item }) => {
                                return <Item_tintuc tintuc={item} key={item.tieude} />
                            }}
                            keyExtractor={eachtintuc => Tintuc.tieude}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    }

    //Nút thoát
    const renderQuit = () => {
        return <View style={{ width: '100%', backgroundColor: '#4F2AAD' }}>
            <TouchableOpacity onPress={() => setcheck(0)}>
                <Text>Quay lại</Text>
            </TouchableOpacity>
        </View>
    }
    return <View style={{ flex: 1 }}>
        {check == 1 ? renderQuit() : null}
        {check == 0 ? renderMain() : <Danhsach x={nganh} y={truong} />}
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        width: '90%',
        height: 250,
        backgroundColor: '#D24162',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 10
    },
    txt: {
        flexDirection: 'column',
        height: 40,
        width: '80%',
        borderWidth: 1,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
    },
    dropdown: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        width: '100%',
        //marginHorizontal: 5,
    },
    Ds: {
        width: "70%",
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtDS: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    btn_chon: {
        borderWidth: 1,
        borderColor: 'black',
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        height: '80%',
        width: '95%'
    }
})
export default Select_school