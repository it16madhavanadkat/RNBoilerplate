import React, {Component} from "react";
import {NavigationActions, StackActions} from "react-navigation";
import {connect} from "react-redux";
import {Image, View} from 'react-native'
import {splashlogo} from "app/assets";
import styles from "./SplashScreenStyle";
import {SessionManager} from "react-native-gtlcomponent";
import {SesstionKey} from "app/Constants";
import Translater from "app/i18n/SyncTranslate";


class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        Translater.setConfig("en");
    }

    render() {
        return (
            <View style={styles.container1}>
                <Image style={styles.imageStyle} source={splashlogo}/>
            </View>
        );
    }
}

const mapActionCreators = {};
const mapStateToProps = state => {
    return {};
};
export default connect(
    mapStateToProps,
    mapActionCreators
)(SplashScreen);


