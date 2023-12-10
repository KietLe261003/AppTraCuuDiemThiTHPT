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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  school as school,
  data as dataWebApi
}
from "../Api_web";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {data} from '../function/Data_bart_chart'
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
function Tra_cuu_diem(props){
  //debugger;
  //các biến
  const [xacnhan,setXacnhan] = useState(0);
  const [user,setUser] = useState({});
  const [truong,setTruong] = useState('');
  const [year2022,setYear2022] = useState(0);
  const [year2021,setYear2021] = useState(0);
  const [year2020,setYear2020] = useState(0);
  const [year2019,setYear2019] = useState(0);
  const [year2018,setYear2018] = useState(0);
  const [year2017,setYear2017] = useState(0);
  const [year2016,setYear2016] = useState(0);
  useEffect(()=>{
    school.school()
      .then(ResponseUser=>setUser(ResponseUser));
  },[])
  const {name,nameGiaovien}=user;
    //debugger;
    const [value, setValue] = useState(null);
    const [valueN, setValueN] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
    const chartConfig = {
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    let [Nganh,setNganh] = useState([]);
    return <View style={styles.container}>
      <View style={styles.header}>
        {/*drop down chọn trường */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          data={data}
          search
          labelField="label"
          valueField="value"
          placeholder="Chọn tên trường"
          onChange={item => {
            setValue(item.value)
            setIsFocus(false)
            setTruong(item.name)
            let urlWeb = 'http://10.0.2.2:5000/crawl';
            let data = [];
            axios.get(urlWeb)
            .then(function (response) {
              response.data.forEach(item => {
                  if(item['uri']==value)
                  {
                    let ob = {Name: item['tenN'], value: item['maN']}
                    data.push(ob);
                    //debugger;
                  }
              });
              setNganh(data);
            })
            .catch(function (error) {
              alert(error)
            })
          }}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          searchPlaceholder="Search..."
        />

        <TouchableOpacity style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 50,
                  marginBottom: 20,
              }} 
                onPress ={item =>{
                  let urlWeb = 'http://10.0.2.2:5000/web/web2022';
                  let data = [];
                  axios.get(urlWeb)
                  .then(function (response) {
                    response.data.forEach(item => {
                        if(item['uri']==value)
                        {
                          let ob = {Name: item['tenN'], value: item['maN']}
                          data.push(ob);
                          //debugger;
                        }
                    });
                    setNganh(data);
                  })
                  .catch(function (error) {
                    alert(error)
                  })
                }}
              >
                <Text>Xác nhận</Text>
              </TouchableOpacity>
        
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 5
          }}
        >Danh sách các ngành của trường đã chọn</Text>
        {/*drop down chọn ngành */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          data={Nganh}
          search
          labelField="Name"
          valueField="Value"
          placeholder="Chọn tên ngành"
          onChange={item => {
            setYear2016(0);
            setYear2017(0);
            setYear2018(0);
            setYear2019(0);
            setYear2020(0);
            setYear2021(0);
            setYear2022(0);
            setValueN(item.value)
            setIsFocus(false)
            let urlWeb = 'http://10.0.2.2:5000/web/web2022';
            axios.get(urlWeb)
              .then(function (response) {
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == value && item1['maN'] == item.value) {
                    setYear2022(item1['y2022']);
                    kt++;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })

            //data 2021
            let urlWeb21 = 'http://10.0.2.2:5000/web/web2021';
            axios.get(urlWeb21)
              .then(function (response) {
                let uri = value + '?y=2021';
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == uri && item1['maN'] == item.value) {
                    setYear2021(item1['y2022']);
                    kt++;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })

            //data2020
            let urlWeb20 = 'http://10.0.2.2:5000/web/web2020';
            axios.get(urlWeb20)
              .then(function (response) {
                let uri = value + '?y=2020';
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == uri && item1['maN'] == item.value) {
                    setYear2020(item1['y2022']);
                    kt++;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })

            //data2019
            let urlWeb19 = 'http://10.0.2.2:5000/web/web2019';
            axios.get(urlWeb19)
              .then(function (response) {
                let uri = value + '?y=2019';
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == uri && item1['maN'] == item.value) {
                    setYear2019(item1['y2022']);
                    kt++;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })

            //data 2018
            let urlWeb18 = 'http://10.0.2.2:5000/web/web2018';
            axios.get(urlWeb18)
              .then(function (response) {
                let uri = value + '?y=2018';
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == uri && item1['maN'] == item.value) {
                    setYear2018(item1['y2022']);
                    kt++;
                    //debugger;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })

            //data2017
            let urlWeb17 = 'http://10.0.2.2:5000/web/web2017';
            axios.get(urlWeb17)
              .then(function (response) {
                let uri = value + '?y=2017';
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == uri && item1['maN'] == item.value) {
                    setYear2017(item1['y2022']);
                    kt++;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })

            //data2016
            let urlWeb16 = 'http://10.0.2.2:5000/web/web2016';
            axios.get(urlWeb16)
              .then(function (response) {
                let uri = value + '?y=2016';
                let kt = 0;
                response.data.forEach(item1 => {
                  if (item1['uri'] == uri && item1['maN'] == item.value) {
                    setYear2016(item1['y2022']);
                    kt++;
                  }
                });
                // if(kt==0)
                // debugger;
              })
              .catch(function (error) {
                debugger
                alert(error)
              })
          }}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          searchPlaceholder="Search..."
        />
      </View>
      
      
      <View style={styles.test}>
        {/* <Text style={{fontSize: 20}}>Tên Trường: {dataWeb.nameTruong}</Text>
        <Text style={{fontSize: 20, marginBottom: 20,}}>Tên Ngành: {dataWeb.nameNganh}</Text> */}
        <LineChart
          data={{
            labels: ["2016", "2017", "2018", "2019", "2020", "2021","2022"],
            datasets: [
              {
                data: [
                  year2016,
                  year2017,
                  year2018,
                  year2019,
                  year2020,
                  year2021,
                  year2022,
                ]
              }
            ]
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
  </View>
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    },
    dropdown: {
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 8,
      width: '47%',
      marginHorizontal: 5,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    test: {
      marginTop: 100,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
export default Tra_cuu_diem