import React from 'react';
import {FlatList, View} from 'react-native';
import PostItem from '../../../../../components/views/PostItem';
import {Dummy_Posts} from '../../../../../data';
import style from './style';

function MyPostsTab({}) {
  return (
    <View style={style.main}>
      <FlatList
        nestedScrollEnabled={true}
        data={Dummy_Posts}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => {
          return <PostItem key={index} item={item} />;
        }}
      />
    </View>
  );
}

export default MyPostsTab;
