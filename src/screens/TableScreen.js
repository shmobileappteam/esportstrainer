import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {COLORS, FONTS} from '../constants';
import {DataTable} from 'react-native-paper';
import Orientation from 'react-native-orientation-locker';

const TableScreen = ({navigation}) => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 20]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );
  const [items] = useState([
    {
      key: 1,
      name: 'Title Here',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Title Here',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Title Here',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Title Here',
      calories: 305,
      fat: 3.7,
    },
    {
      key: 5,
      name: 'Title Here',
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  const changeToPortrait = () => {
    Orientation.lockToPortrait(); // Locks the orientation to portrait
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        label="Sports Name"
        leftOnpress={() => {
          navigation.goBack();
          changeToPortrait();
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 25}}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title></DataTable.Title>
            <DataTable.Title
              numeric
              style={styles.centerContent}
              textStyle={styles.regularText}>
              1
            </DataTable.Title>
            <DataTable.Title
              numeric
              textStyle={styles.regularText}
              style={styles.centerContent}>
              2
            </DataTable.Title>
            <DataTable.Title
              numeric
              textStyle={styles.regularText}
              style={styles.centerContent}>
              3
            </DataTable.Title>
            <DataTable.Title
              numeric
              textStyle={styles.regularText}
              style={styles.centerContent}>
              4
            </DataTable.Title>
            <DataTable.Title
              numeric
              textStyle={styles.regularText}
              style={styles.centerContent}>
              5
            </DataTable.Title>

            <DataTable.Title
              textStyle={{color: '#A9363F', fontFamily: FONTS.semiBold}}
              style={[styles.centerContent, {backgroundColor: '#FCEDEE'}]}>
              Fail
            </DataTable.Title>
            <DataTable.Title
              textStyle={{color: '#18905C', fontFamily: FONTS.semiBold}}
              style={[styles.centerContent, {backgroundColor: '#E9F8F2'}]}>
              Success
            </DataTable.Title>
            <DataTable.Title
              textStyle={{color: COLORS.tertiary, fontFamily: FONTS.semiBold}}
              style={[styles.centerContent, {backgroundColor: '#F9FAFB'}]}>
              TOTAL
            </DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map(item => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={styles.regularText}
                style={styles.centerContent}>
                {item.calories}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={styles.regularText}
                style={styles.centerContent}>
                {item.fat}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={styles.regularText}
                style={styles.centerContent}>
                {item.fat}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={styles.regularText}
                style={styles.centerContent}>
                {item.fat}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={styles.regularText}
                style={styles.centerContent}>
                {item.fat}
              </DataTable.Cell>

              <DataTable.Cell
                numeric
                textStyle={{color: '#A9363F', fontFamily: FONTS.semiBold}}
                style={[styles.centerContent, {backgroundColor: '#FCEDEE'}]}>
                {item.fat}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={{color: '#18905C', fontFamily: FONTS.semiBold}}
                style={[styles.centerContent, {backgroundColor: '#E9F8F2'}]}>
                {item.fat}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={{color: COLORS.tertiary, fontFamily: FONTS.semiBold}}
                style={[styles.centerContent, {backgroundColor: '#F9FAFB'}]}>
                {item.fat}
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={page => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Rows per page'}
          />
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centerContent: {
    justifyContent: 'center',
  },
  regularText: {
    fontFamily: FONTS.regular,
  },
});
