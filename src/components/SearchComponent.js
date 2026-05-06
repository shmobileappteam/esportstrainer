import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {COLORS, FONTS} from '../constants';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Type to search..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchStyles}
      inputStyle={styles.searchInput}
      mode="view"
      underlineColorAndroid={'transparent'}
      iconColor={COLORS.tertiary}
      showDivider={false}
    />
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchStyles: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEF',
    paddingHorizontal: 15,
  },
  searchInput: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    flex: 1,
    height: 50,
    minHeight: 50,
  },
});
