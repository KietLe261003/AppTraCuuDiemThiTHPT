/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Login,Setting,Tra_cuu_diem,List_item,Welcome,Select_school,test,tracnghiem,Danhsach,Tracnghiemsu} from './view';
import App from './navigation/App';
import List_tintuc from './view/item_tintuc'
import Tracnghiem from './view/Tracnghiem';
import TracnghiemTriet from './view/TracNghiemTriet';

AppRegistry.registerComponent(appName,() => App)