import {Image, Platform, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Button, Container, Content, Footer, Spinner, Text} from "native-base";
import styles from "./LoginScreenStyle";
import {EditTextView, TextView} from "app/Component";
import {splashlogo} from "app/assets";

import {forgotPassword, loginUser} from 'app/store/login'
import {color} from "app/Theme";

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
        this.props.navigation.navigate("PinViewScreen", {otp: null})

    };

    componentDidMount() {


    }

    handleLoginSubmit = () => {



        this.props.navigation.navigate("AuthScreen")


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
                    <Text style={styles.fontStyle}>{'Copyright ©ReactNtive 2019'}</Text>
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
