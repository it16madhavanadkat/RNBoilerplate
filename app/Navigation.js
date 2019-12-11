import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
/*All screen will be added to createStackNavigator*/
import SplashScreen from "./Root/Screens/SplashScreen";
import HomeScreen from "./Root/Screens/HomeScreen";
import AuthScreen from "./Root/Screens/AuthScreen";
import TaskSheetScreen from "./Root/Screens/TaskSheetScreen";
import IncrementScreen from "./Root/Screens/Letters/IncrementScreen";
import TaxScreen from "./Root/Screens/TaxScreen";
import PeopleScreen from "./Root/Screens/PeopleScreen";
import LoginScreen from "./Root/Screens/LoginScreen";
import UnlockPINScreen from "./Root/Screens/UnlockPINScreen";
/*add all screen above this line*/
import {fromRight} from "././navigationTransitions";
import PinViewScreen from "./Root/Screens/PinViewScreen/PinViewScreen";
import PayslipScreen from "./Root/Screens/PayslipScreen/PayslipScreen";
import PayslipDetailScreen from './Root/Screens/PayslipScreen/PayslipDetail/PayslipDetailScreen';
import LettersScreen from "./Root/Screens/Letters/LettersScreen";
import ChangePasswordScreen from "./Root/Screens/ChangePasswordScreen/ChangePasswordScreen";
import TravelScreen from "./Root/Screens/TravelScreen";
import RequestScreen from "./Root/Screens/RequestScreen"
import LeaveScreen from "./Root/Screens/RequestScreen/Leave";
import ApplyLeaveScreen from "./Root/Screens/RequestScreen/Leave/ApplyLeave/ApplyLeaveScreen";
import HolidayListScreen from "./Root/Screens/HolidayListScreen";
import ExpenseScreen from "./Root/Screens/RequestScreen/Expense";
import ActivatePinViewScreen from "./Root/Screens/ActivatePinViewScreen";
import ReActivatePinViewScreen from "./Root/Screens/ActivatePinViewScreen/ReActivatePinViewScreen";
import LocationScreen from "./Root/Screens/LocationScreen";
import FlexiBenefitScreen from "./Root/Screens/FlexiBenefitScreen";
import BenifitsScreen from "./Root/Screens/BenifitsScreen";
import NewsScreen from "./Root/Screens/NewsScreen";

console.disableYellowBox = true;

const StackScreen = createStackNavigator(
    {
        SplashScreen: {
            screen: HomeScreen,
            navigationOptions: () => ({
                header: null
            })
        }, AuthScreen: {
            screen: AuthScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: () => ({
                header: null
            })
        }, TaskSheetScreen: {
            screen: TaskSheetScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        IncrementScreen: {
            screen: IncrementScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        TaxScreen: {
            screen: TaxScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        PeopleScreen: {
            screen: PeopleScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        PinViewScreen: {
            screen: PinViewScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        ActivatePinViewScreen: {
            screen: ActivatePinViewScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        ReActivatePinViewScreen: {
            screen: ReActivatePinViewScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        PayslipScreen:{
            screen: PayslipScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        PayslipDetailScreen:{
            screen: PayslipDetailScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        LettersScreen:{
            screen: LettersScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        ChangePasswordScreen:{
            screen: ChangePasswordScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        TravelScreen:{
            screen: TravelScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        RequestScreen:{
            screen: RequestScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        LeaveScreen:{
            screen:LeaveScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        ApplyLeaveScreen:{
            screen:ApplyLeaveScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        HolidayListScreen:{
            screen:HolidayListScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        ExpenseScreen:{
            screen:ExpenseScreen,
            navigationOptions:()=>({
                header:null
            })
        },
        LocationScreen:{
            screen:LocationScreen,
            navigationOptions:()=>({
                header:null
            })
        },
        FlexiBenefitScreen:{
            screen:FlexiBenefitScreen,
            navigationOptions:()=>({
                header:null
            })
        },
        BenifitsScreen:{
            screen:BenifitsScreen,
            navigationOptions:()=>({
                header:null
            })
        },
        NewsScreen:{
            screen:NewsScreen,
            navigationOptions:()=>({
                header:null
            })
        },
        UnlockPINScreen:{
            screen:UnlockPINScreen,
            navigationOptions:()=>({
                header:null
            })
        }
    },

    {
        /*
         * fromRight will animate screen from right side while open
         */
        transitionConfig: nav => fromRight()
    }
);

export default createAppContainer(StackScreen);
