import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content} from "native-base";
import {MainHeader} from "app/Component";
import {notificaiton, left} from 'app/assets'
import {View, Text} from "react-native";
class ScanQR extends Component {

    render() {
        return (
            <Container>
                <MainHeader leftIcon={left} bodyContent={'Scan QR Code'} rightIcon={notificaiton}
                            backAction={() => {
                                this.props.navigation.goBack()
                            }}
                />
                <View><Text>{'Scan QRCode'}</Text></View>
            </Container>


        );
    }
}

const mapActionCreators = {};

export default connect(
    null,
    mapActionCreators
)(ScanQR);
