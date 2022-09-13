import React from 'react';
import {View} from 'react-native';
import Appbar from '../../../components/views/Appbar';
import ActivitiesTabs from '../../../navigation/ActivitiesTabsNavigator';
import style from './style';

function Activities({}) {
  return (
    <View style={style.main}>
      <Appbar title={`Activities`} />
      <View style={style.contentView}>
        <ActivitiesTabs />
      </View>
    </View>
  );
}

export default Activities;
