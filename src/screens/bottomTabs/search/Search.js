import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import CircleImage from '../../../components/image/CircleImage';
import Heading from '../../../components/text/Heading';
import CustomTextInput from '../../../components/textInput/CustomTextInput';
import SearchItem from '../../../components/views/SearchItem';
import WorldFoodItem from '../../../components/views/WorldFoodItem';
import {image_user_1, search_gray_icon} from '../../../constants';
import {Dummy_recent_searches, Dummy_world_food} from '../../../data';
import {colors, fontFamilyStyles, fontSize} from '../../../utils/utils';
import style from './style';

function Search({navigation}) {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={style.main}>
      <View style={style.topView}>
        <CustomTextInput
          onChangeText={e => {
            setSearchText(e);
          }}
          leftIcon={search_gray_icon}
          placeholder={`Search Food`}
        />
      </View>
      <View style={style.contentView}>
        {searchText === '' ? (
          <>
            <View style={style.topContentView}>
              <Heading
                size={fontSize.fontSizeH3}
                color={colors.extraDarkColor}
                fontFamily={fontFamilyStyles.PoppinsMedium}>
                {`Recent`}
              </Heading>
              <View>
                <ScrollView>
                  {Dummy_recent_searches.map((item, index) => {
                    return (
                      <SearchItem
                        key={index}
                        item={item}
                        remove={true}
                        onRemove={() => {}}
                      />
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <View style={style.bottomContentView}>
              {Dummy_world_food.map((item, index) => {
                return <WorldFoodItem key={index} item={item} />;
              })}
            </View>
          </>
        ) : (
          <View style={style.topContentView}>
            <View>
              <ScrollView>
                {Dummy_recent_searches.map((item, index) => {
                  return <SearchItem key={index} item={item} />;
                })}
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default Search;
