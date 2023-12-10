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
    Dimensions,
    Modal
} from "react-native";
//import data from "../function/Quiz_data";
import axios from "axios";
import TabBar from "../navigation/TabBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
function Tracnghiem({ navigation }) {

    //const [data, setData] = useState([]);
    const [allQuestion,setallQuestion]=useState([]);
    //let allQuestion=[];
    const link1=[
        '../Image/cau1.jpg',
        '../Image/cau2.jpg'
    ]
    //const [link,setlink]=useState('../Image/cau1.jpg')
    //let link = link1[0];
    //debugger;
    const [id, setid] = useState(0);
    const [point,setpoint] = useState(0);
    const [acp,setacp]=useState(null);
    const [wrong,setwrong]=useState(null);
    const [next,setnext]=useState(false);
    const [isOptionDisible,setisOptionDisible] = useState(false);
    const [showPoint,setshowPoint]=useState(false);

    {/*crawl data */}
    function crawl() {
        axios.get('http://10.0.2.2:5000/dethitoan')
            .then(function (response) {
                // handle success
                console.log(response);
                let data1 = response.data;
                let data = [];
                for (let i = 0; i < data1.length; i++) {
                    let oj = {
                        Question: data1[i].question,
                        Option: ["A", "B", "C", "D"],
                        AcpOption: data1[i].dapan
                    }
                    data.push(oj);
                }
                //data;
                //allQuestion=data;
                setallQuestion(data);
                //console.log(data[0].Question)
                //debugger;
                return;
                //debugger;
            })
            .catch(function (error) {
                // handle error
                debugger;
                console.log(error);
            })
    }

    function checkAnswer(selectOption) {
        let acpAnswer = allQuestion[id].AcpOption;
        setacp(acpAnswer);
        setwrong(selectOption);
        setnext(true);
        setisOptionDisible(true);
        if(acpAnswer==selectOption)
        {
            setpoint(point+1);
        }
    }
    const handNext=()=>{
        if(id+1==allQuestion.length)
        {
            setshowPoint(true);
        }
        else
        {
            setid(id+1);
            setacp(null);
            setwrong(null);
            setisOptionDisible(false);
            setnext(false);
        }
    }
    const restartQuiz = () =>{
        setpoint(0);
        setid(0);
        setacp(null);
        setwrong(null);
        setisOptionDisible(false);
        setnext(false);
        setshowPoint(false);
    }

    const renderQuestion = (allQuestion) => {
        return (
            <View>
                <View style={{
                    //height: 100,
                    backgroundColor: "BB6BDA",
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        fontSize: 30,
                        marginRight: 10,
                        color: 'white',
                        fontFamily: "Times New Roman"
                    }}>Question</Text>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>{id + 1}</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>/{allQuestion.length} </Text>
                </View>
                <View style={{height: 1,backgroundColor: 'white'}}></View>
                <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <Image
                    
                    source={{
                        uri: `${allQuestion[id].Question}`
                    }}
                    style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'contain'
                    }}
                    />
                </View>
            </View>
            
        )
    }
    const renderOption = () => {
        {allQuestion};
        //debugger;
        return <View style={{
            marginHorizontal: 30, 
        }}>
            
            {allQuestion[id].Option.map(Option1 => (
                <TouchableOpacity 
                key={Option1}
                disabled={isOptionDisible}
                onPress={()=>checkAnswer(Option1)}
                style={{
                    borderWidth: 3, borderColor: Option1==acp ? 'green' : Option1==wrong ? 'red' : 'black',
                    height: 50, borderRadius: 15,
                    alignItems: 'center',justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    marginVertical: 10,
                }}>
                    <Text style={{ fontSize: 20}}>{Option1}</Text>
                    {
                        Option1==acp ? 
                            <View style={{
                                width: 30,height: 30,borderRadius: 15,
                                backgroundColor: 'green',
                                alignItems: 'center',justifyContent: 'center'
                            }}>
                                <MaterialCommunityIcons name="check" style={{color: 'white',fontSize: 20}}/>
                            </View>
                        : Option1==wrong ? 
                        <View style={{
                            width: 30,height: 30,borderRadius: 15,
                            backgroundColor: 'red',
                            alignItems: 'center',justifyContent: 'center'
                        }}>
                            <MaterialCommunityIcons name="close" style={{color: 'white',fontSize: 20}}/>
                        </View>
                        : null

                    }
                </TouchableOpacity>
            ))}
        </View>
    }
    const renderButtonNext = () =>{
        if(next==true)
        {
            return (
                <TouchableOpacity 
                    onPress={handNext}
                 style={{
                    marginTop: 20, backgroundColor: '#66CCFF', borderRadius: 5,marginHorizontal: 20,
                    height: 40,alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                )
        }
        else
        {
           return null
        }
    }
    const renderQuit=()=>{
        return <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('TabBar')}
            >
                <Text>Thoát</Text>
            </TouchableOpacity>
        </View>
    }

    return <View style={{
        flex: 1,
        backgroundColor: '#4F2AAD',
        paddingVertical: 30,
        paddingHorizontal: 20,
    }}>

        {/*allQuestion.length==0 ? crawl(): <Text>{allQuestion[0].Question}</Text>*/}

        {/*Quiz*/}
        {renderQuit()}

        {/* Question */}
        {allQuestion.length==0 ? crawl():renderQuestion(allQuestion)}
        
         <View style={{marginBottom: 50}}></View>   

        {/* Option */}
        {allQuestion.length==0 ? crawl(): renderOption()}

        {/* buttom next */}
        {renderButtonNext()}

        {/*show point  */}
        <Modal 
            animationType="slide"
            transparent={true}
            visible={showPoint}
        >
            <View style={{
                flex: 1,
                backgroundColor: '#4F2AAD',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: '90%',
                    padding: 20,
                    borderRadius: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        {point>allQuestion.length/2 ? 'Trên trung bình' : 'Còn tệ'}
                    </Text>
                    <View style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Text
                            style={{
                                fontSize: 25, fontWeight: 'bold',
                                color: point>allQuestion.length/2 ? 'green' : 'red'
                            }}>
                            {point}
                        </Text>
                        <Text style={{fontSize: 20,fontWeight: 'bold'}}>/{allQuestion.length}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={restartQuiz}
                        style={{
                            backgroundColor: '#66CCFF',
                            padding: 20,
                            borderRadius: 20,
                            width: '100%',
                        }}>
                        <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'center'}}>Làm lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
}
const styles = StyleSheet.create({

})
export default Tracnghiem;