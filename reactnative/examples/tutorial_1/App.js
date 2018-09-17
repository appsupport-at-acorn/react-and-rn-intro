/* @flow */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';

type Props = {};
type State = { dataSource: any };
export default class App extends Component<Props, State> {
  state:State = { dataSource:[] };

  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let numbers = [...Array(100)];
    numbers.map((value, index, array)=>{array[index] = index.toString();})
    this.state = {
      dataSource: ds.cloneWithRows(
        numbers
      ),
    };
  }
  render() {
    return (
      <View>
        <Text style={{height: 50}}></Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData:string, unused:string, index:string) =>
              <Text>  Row {index} = {rowData}</Text>}
        >
        </ListView>
      </View>
    );
  }
}
