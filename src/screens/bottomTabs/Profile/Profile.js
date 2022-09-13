import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import BasicText from '../../../components/text/BasicText';
import Heading from '../../../components/text/Heading';
import Appbar from '../../../components/views/Appbar';
import FollowCountView from '../../../components/views/FollowCountView';
import FramedProfileImage from '../../../components/views/FramedProfileImage';
import ProfileHeader from '../../../components/views/ProfileHeader';
import {image_user_2, more_dark_icon} from '../../../constants';
import ProfileTabs from '../../../navigation/ProfileTabsNavigator';
import {
  colors,
  fontFamilyStyles,
  fontSize,
  height_screen,
} from '../../../utils/utils';
import style from './style';

function Profile({navigation}) {
  const [menu, setMenu] = useState(false);
  const [isToTop, setToTop] = useState(false);

  const checkCloseToTop = ({layoutMeasurement, contentOffset, contentSize}) => {
    console.log(contentOffset);
  };
  return (
    <View style={style.main}>
      <Appbar
        title={`Profile`}
        rightIcon={more_dark_icon}
        rightIconPress={() => {
          setMenu(true);
        }}
      />
      <View style={style.contentView}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          onScroll={({nativeEvent}) => {
            checkCloseToTop(nativeEvent);
          }}>
          {!isToTop ? (
            <ProfileHeader
              name={`Eleanor Pena`}
              description={`Sometimes I cook and I like to show them`}
              followersCount={`1,342`}
              followingCount={`586`}
              image={image_user_2}
            />
          ) : null}

          <View
            style={[style.bottomContentView, {height: height_screen * 0.75}]}>
            <ProfileTabs />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Profile;
