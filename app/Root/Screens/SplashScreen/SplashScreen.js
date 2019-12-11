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

    async componentDidMount(): void {
        Translater.setConfig("en");
        this.forceUpdate();
        SessionManager.getValueForKey(SesstionKey.USERS).then((user) => {

            if (user) {
                SessionManager.getValueForKey(SesstionKey.ISPINSET).then((pinset) => {
                    if (pinset) {
                        this._navigateToScreen("UnlockPINScreen")
                    } else {
                        this._navigateToScreen("AuthScreen")
                    }
                });
            } else {
                this._navigateToScreen("LoginScreen")
            }

        });
    }


    _navigateToScreen(screen) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: screen
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
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


