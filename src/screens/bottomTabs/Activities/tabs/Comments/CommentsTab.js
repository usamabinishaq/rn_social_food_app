import React from 'react';
import {FlatList, View} from 'react-native';
import Heading from '../../../../../components/text/Heading';
import ActivityUserComments from '../../../../../components/views/ActivityUserComments';
import ExpandableView from '../../../../../components/views/ExpandableView';
import {comment_icon_blue} from '../../../../../constants';
import {Dummy_Posts} from '../../../../../data';
import {colors, fontFamilyStyles, fontSize} from '../../../../../utils/utils';
import styles from './style';

function CommentsTab(props) {
  return (
    <View style={styles.main}>
      <ExpandableView
        icon={comment_icon_blue}
        duration={`2 weeks`}
        count={`221`}
        label={`Comments`}
      />
      <Heading
        size={fontSize.fontSizeH2}
        fontFamily={fontFamilyStyles.PoppinsMedium}
        color={colors.extraDarkColor}
        style={styles.heading}>
        {`Comments`}
      </Heading>
      <FlatList
        nestedScrollEnabled={true}
        data={Dummy_Posts}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        renderItem={({item, index}) => {
          return item.comments.map((likes, ind) => {
            return (
              <ActivityUserComments
                key={ind}
                item={likes}
                bookmark={true}
                post={item}
              />
            );
          });
        }}
      />
    </View>
  );
}

export default CommentsTab;
