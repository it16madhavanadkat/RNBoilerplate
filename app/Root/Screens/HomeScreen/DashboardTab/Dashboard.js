import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {notificaiton} from "../../../../assets";
import {MainHeader} from "../../../../Component";
export default class Dashboard extends Component {
    render() {
      return (
          <MainHeader  bodyContent={'Dahboard'} rightIcon={notificaiton}/>
      )
  }
  }
