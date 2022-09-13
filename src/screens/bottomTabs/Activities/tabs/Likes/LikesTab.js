import React from 'react';
import {FlatList, View} from 'react-native';
import Heading from '../../../../../components/text/Heading';
import ActivityUserLikes from '../../../../../components/views/ActivityUserLikes';
import ExpandableView from '../../../../../components/views/ExpandableView';
import {heart_red_icon} from '../../../../../constants';
import {Dummy_Posts} from '../../../../../data';

import {
  colors,
  fontFamilyStyles,
  fontSize,
  isArrayCheck,
} from '../../../../../utils/utils';
import styles from './style';

function LikesTab(props) {
  return (
    <View style={styles.main}>
      <ExpandableView
        icon={heart_red_icon}
        duration={`2 weeks`}
        count={`2,321`}
        label={`Likes`}
      />
      <Heading
        size={fontSize.fontSizeH2}
        fontFamily={fontFamilyStyles.PoppinsMedium}
        color={colors.extraDarkColor}
        style={styles.heading}>
        {`Likes`}
      </Heading>
      <FlatList
        nestedScrollEnabled={true}
        data={Dummy_Posts}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        renderItem={({item, index}) => {
          return (
            isArrayCheck(item.likes) &&
            item.likes.map((likes, ind) => {
              return (
                <ActivityUserLikes
                  key={ind}
                  item={likes}
                  bookmark={true}
                  post={item}
                />
              );
            })
          );
        }}
      />
    </View>
  );
}

export default LikesTab;
