import {Image, Platform, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Button, Container, Content, Footer, Spinner, Text} from "native-base";
import styles from "./LoginScreenStyle";
import {EditTextView, TextView} from "app/Component";
import {splashlogo} from "app/assets";
import base64 from 'react-native-base64'
import {forgotPassword, loginUser} from 'app/store/login'
import {color} from "app/Theme";
import DeviceInfo from 'react-native-device-info';
import Translater from "app/i18n";


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'poojasuthar',
            password: '123456',
            uid: ''
        }
    }

    handleForgotPassword = () => {

        let username = this.state.username;
        this.props.navigation.navigate("PinViewScreen", {otp: null})
        // this.props.forgotPassword(username, {
        //     SuccessCallback: res => {
        //         this.props.navigation.navigate("PinViewScreen", {otp: res.Data.OTP})
        //     }, FailureCallback: res => {
        //     }
        // })
    };

    componentDidMount(){



        DeviceInfo.getUniqueId().then(uniqueId => {

            this.setState({uid: uniqueId})
        });
    }

    handleLoginSubmit = () => {


        let params = {
            DeviceId: this.state.uid,
            DeviceType: Platform.OS ? 'ios' : 'Android',
            username: this.state.username,
            password: base64.encode(this.state.password),
            FCM_Token: '-'

        };
        this.props.navigation.navigate("AuthScreen")
        // this.props.loginUser(params, {
        //     SuccessCallback: res => {
        //         this.props.navigation.navigate("AuthScreen")
        //     }, FailureCallback: res => {
        //     }
        // })


    };

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container1}>
                        <Image style={styles.imageStyle} source={splashlogo}/>
                    </View>
                    <View style={{padding: 30, marginTop: 40}}>

                        <EditTextView label={"USERNAME"} value={this.state.username} onChangeText={(text) => {
                            this.setState({username: text})
                        }}/>
                        <EditTextView label={'PASSWORD'} value={this.state.password} secureTextEntry={true}
                                      onChangeText={(text) => {
                                          this.setState({password: text})
                                      }}/>
                        <TouchableOpacity onPress={this.handleForgotPassword} style={{alignItems: 'flex-end'}}>
                            <TextView style={styles.rightTextStyle}>{'Forgot Password?'}</TextView>
                        </TouchableOpacity>
                        {this.props.loading ? <Spinner color={color._018CCA}/> :
                            <Button onPress={this.handleLoginSubmit} full rounded
                                    style={styles.buttonStyle}><TextView
                                style={styles.buttonTextStyle}> {Translater.doTranslate("login")} </TextView></Button>}
                    </View>

                </Content>
                <Footer style={styles.footerStyle}>
                    <Text style={styles.fontStyle}>{'Copyright ©️SOFIA 2019'}</Text>
                </Footer>
            </Container>

        );
    }
}

const mapActionCreators = {loginUser, forgotPassword};

const mapStateToProps = state => {
    return {
        loading: state.login.loading
    };
};
export default connect(
    mapStateToProps,
    mapActionCreators
)(LoginScreen);
