import React, {Component} from 'react'
import {Container, Header, Content, Card, CardItem, Text, Body, Thumbnail} from 'native-base';
import {View, FlatList, ImageBackground} from 'react-native'
import {
    timesheet,
    payslip,
    letters,
    tax,
    benifits,
    profile,
    tavel,
    company,
    news,
    request,
    approval,
    eCare
} from 'app/assets';
import cs from 'app/CommonStyle'

export default class CarouselItem extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return (
            <ImageBackground
                source={{uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F161021150018-dubai-jumeirah-beach-hotel.jpg'}}
                style={[{height: '90%', width: '96%', overflow: 'hidden', margin: 5, borderRadius: 10}]}>
                <View style={{
                    position: 'absolute',overflow: 'hidden',
                    bottom: 0, backgroundColor: 'rgba(0,0,0,0.50)', width: '100%'
                }}>

                    <Text style={{
                        fontSize: 14,
                        padding: 5,
                        color: 'white',
                        width: '100%'
                    }}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}</Text>

                    <Text style={{
                        fontSize: 12,
                        paddingLeft: 5,
                        paddingBottom: 10,

                        color: 'white',
                        width: '100%'
                    }}>{'10 Jun 2019'}</Text>

                </View>
            </ImageBackground>
        )
    }
}
