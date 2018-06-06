import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';
import {View} from 'react-native';
import Moment from 'moment';

export default class HorizontalCalendarList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    Moment.locale('en');
    var date = Moment(new Date()).format('YYYY-MM-DD ')
    console.log(date);
    return (
      <View>
        <CalendarList
          current={date}
          pastScrollRange={24}
          futureScrollRange={24}
          horizontal
          pagingEnabled
          style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
        />
      </View>
    );
  }
}