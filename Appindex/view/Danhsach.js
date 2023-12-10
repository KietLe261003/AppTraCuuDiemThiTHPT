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
    FlatList,
    Select,
    Option,
    OptionList,
    Dimensions
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import axios from "axios";
function Danhsach(props) {
    //debugger;
    const maN=props.x[0]+props.x[1]+props.x[2];
    const Truong=props.y;
    const [Data,setData] = useState([])
    const [ThongBao,setThongbao]= useState('');
    function callData() {
        axios.get('http://10.0.2.2:5000/web/web2022')
        .then(function (response) {
            console.log(response);
            const data=response.data
            let data1=[];
            let data2=[];
            for(let i=0;i<data.length;i++)
            {
                const temp=data[i].maN[0]+data[i].maN[1]+data[i].maN[2];
                if(maN==temp && data[i].nameTruong==Truong)
                {
                    let oj={
                        Name: data[i].tenN,
                        Point: data[i].y2022
                    }
                    data1.push(oj);
                }
            }
            for(let i=0;i<data1.length;i++)
            {
                let check=0;
                for(let j=0;j<i;j++)
                {
                    if(data1[i].Name==data1[j].Name)
                    {
                        check=1;
                        break;
                    }
                }
                if(check==0)
                data2.push(data1[i])
            }
            if(data1.length==0)
            setThongbao('Danh sách chuyên ngành liên quan của trường'+Truong);
            else
            setThongbao('Không có chuyên ngành liên quan')
            setData(data2);
        })
        .catch(function (error) {
            debugger;
            console.log(error)
        })
    }
    /*xuất danh sách */
    const renderList= () =>{
        return <View style={{
            borderWidth: 1,
            borderColor: 'black',
            width: '100%',
            height: '80%',
            backgroundColor: 'white',
            borderRadius: 15,
            alignItems: 'center',
        }}>
            <ScrollView>
            <View style={{
                marginTop: 100
            }}>
                <View style={{
                        marginBottom: 10
                    }}>
                <View style={{
                            flexDirection: 'row',
                            width: 280,
                            alignItems: 'flex-end',
                        }}>
                            <Text style={{
                                fontSize: 18,
                                width: '85%',
                                fontWeight: 'bold'
                            }}>Tên ngành</Text>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>Điểm</Text>
                        </View>
                </View>
                {
                    Data.map(X => <View style={{
                        marginBottom: 5
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: 270, 
                            alignItems: 'flex-end',

                        }}>
                            <Text style={{
                                fontSize: 18,
                                width: '90%'
                            }}>{X.Name}</Text>
                            <Text style={{
                                fontSize: 18
                            }}>{X.Point}</Text>
                        </View>
                        <View style={{height: 2,backgroundColor: 'black'}}><Text>haha</Text></View>
                    </View>)
                    
                }
            </View>
            </ScrollView>
        </View>
    }
    return <View style={{
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F2AAD',
    }}>
        {Data.length==0 ? callData(): null}
        {renderList()}
 
    </View>
}
export default Danhsach