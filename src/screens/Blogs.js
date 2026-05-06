import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONTAINER_PADDING, FONTS, WIDTH} from '../constants';
import SearchComponent from '../components/SearchComponent';
import BlogsCard from '../components/BlogsCard';

const Blogs = () => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
      <Text style={styles.heading}>Sports Training</Text>
      <Text style={styles.subHeading}>
        Lorem Ipsum is simply dummy text of....
      </Text>
      <SearchComponent />

      <FlatList
        data={SECTIONS}
        showsVerticalScrollIndicator={false}
        renderItem={({item: section}) => (
          <>
            <Row title={section.sectionTitle} viewAllOnPress={() => {}} />
            {section.sectionSubTitle && (
              <Text
                style={[
                  styles.subHeading,
                  {marginTop: -10, width: WIDTH / 1.5},
                ]}>
                {section.sectionSubTitle}
              </Text>
            )}
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={section.data}
              bounces={false}
              renderItem={({item, index}) => (
                <BlogsCard index={index} item={item} />
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                paddingHorizontal: CONTAINER_PADDING - 12,
              }}
            />
          </>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Blogs;
const Row = ({title, viewAllOnPress}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowHeading}>{title}</Text>
      <Text
        onPress={viewAllOnPress}
        style={[styles.rowHeading, {color: COLORS.primary}]}>
        View All
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginLeft: CONTAINER_PADDING,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginLeft: CONTAINER_PADDING,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: CONTAINER_PADDING,
    marginVertical: 15,
  },
  rowHeading: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
  },
});

const SECTIONS = [
  {
    id: 1,
    sectionTitle: 'Training',
    sectionSubTitle: 'Lorem Ipsum is simply dummy text of....',
    data: [
      {
        id: 1,
        title: 'Training Program Name 01',
        rating: 4.2,
        length: '5 Min',
        image:
          'https://s3-alpha-sig.figma.com/img/e456/7de3/6e56092be4b56ac7851b0a174a56487c?Expires=1694390400&Signature=DQh6sWgldaXTs-nLhQPZ7K0HAQhlhXUW9yCMbhiTzVmFrs4iuxUyEqLMjxLVet-I-YXjvekIz6luEfbG6LLlz0Dy6pyXCx0VJpUE8yEiIvwLTNAiQ612tdRNALFnonHVy~9USusuhssntRSmMJwG4GbjJL-IHcugpgki0t~gWVFEK71yNKikWsuryFXbUQwQkjI8U~Y4GwjuSSSAqPqMVBLg8id3WW11WUP~nGIqaLFinZ-H2Vui7gEaZb1KOiSM9V1Ko6m9Ojw6uCVZ-XjzxcjofwrLELOlPC7y-gSM-GUnHje00uL6EXg-33bHyiFNuRLP-Nc513-R4GUhzJBVFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 2,
        title: 'Training Program Name 02',
        rating: 4.4,
        length: '15 Min',
        image:
          'https://s3-alpha-sig.figma.com/img/a75f/5bf9/37b223a88e46f23ff9f2bbb54b03fea6?Expires=1694390400&Signature=NSOO2ACHqXs42HTST1eNh8z8S8F98NrDQUhwPzlDcjJBOPn7po8GmnlO2D2XiPdxvCtYt1rHnmiYyIGhV9mQtPhW5tWS-8HgbO8YWmW5Rqxmb47sZ0z79vcMowobBdePYAZeyVYcarv4Y1RrDgYbXYo938F1Su8La0t4S4NJ2CN2NOvN52NI-pCSJkUy7K9uq6zVrrJklOItDgHMvoTtmOh1HGtkV2bl~NctctgrVJYdl7vixiWMDnxF5Is9sgSD-ncH8K9WsmUguQxSSHkxW8AvKzq0P9~U4~tV8MgvyWA-k~4ekNmF5eX3IfJCH-Lam8f-H4GXu7SFmYyMBg8jKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 3,
        title: 'Training Program Name 03',
        rating: 3.7,
        length: '7 Min',
        image:
          'https://s3-alpha-sig.figma.com/img/4d9f/3b4d/5faa38fe0775cf6c0907ee2d16caed0c?Expires=1694390400&Signature=KsRO5qOkxphyoe61fmlffzYVhcQnemrn999P8IoPafRETecgXJ6XgOIOytKwTn7Y3b792ma3OTxhTSBfGQAjDsiCesZ-f~apt-vUtdc40KN2BtWoIfnPAaDKXLHshR~O1mXcTRXUpCiJQirnPxbdF2AwVkL7ClUA3EqtOUt8XmP4uzFBh9DHLeS5Fp9p2pHyS0TtIYfjM0kHurpw47ilPDMDiMEpfNeJH-FDC8g3IzYdk6YOk9yB9Qo8RnxpdIOwPyv~aYFMBwz40eevOx6qGUzgLzX6cM36KGyZW~54cM83yEQnieUcCZc-Te1D4xl5txJ4HnYwvHydZEQU~iV0EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
    ],
  },
  {
    id: 2,
    sectionTitle: 'Top Rated',
    data: [
      {
        id: 1,
        title: 'Training Program Name 01',
        rating: 4.2,
        length: '5 Min',
        image:
          'https://s3-alpha-sig.figma.com/img/e456/7de3/6e56092be4b56ac7851b0a174a56487c?Expires=1694390400&Signature=DQh6sWgldaXTs-nLhQPZ7K0HAQhlhXUW9yCMbhiTzVmFrs4iuxUyEqLMjxLVet-I-YXjvekIz6luEfbG6LLlz0Dy6pyXCx0VJpUE8yEiIvwLTNAiQ612tdRNALFnonHVy~9USusuhssntRSmMJwG4GbjJL-IHcugpgki0t~gWVFEK71yNKikWsuryFXbUQwQkjI8U~Y4GwjuSSSAqPqMVBLg8id3WW11WUP~nGIqaLFinZ-H2Vui7gEaZb1KOiSM9V1Ko6m9Ojw6uCVZ-XjzxcjofwrLELOlPC7y-gSM-GUnHje00uL6EXg-33bHyiFNuRLP-Nc513-R4GUhzJBVFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 2,
        title: 'Training Program Name 02',
        rating: 4.4,
        length: '15 Min',
        image:
          'https://s3-alpha-sig.figma.com/img/a75f/5bf9/37b223a88e46f23ff9f2bbb54b03fea6?Expires=1694390400&Signature=NSOO2ACHqXs42HTST1eNh8z8S8F98NrDQUhwPzlDcjJBOPn7po8GmnlO2D2XiPdxvCtYt1rHnmiYyIGhV9mQtPhW5tWS-8HgbO8YWmW5Rqxmb47sZ0z79vcMowobBdePYAZeyVYcarv4Y1RrDgYbXYo938F1Su8La0t4S4NJ2CN2NOvN52NI-pCSJkUy7K9uq6zVrrJklOItDgHMvoTtmOh1HGtkV2bl~NctctgrVJYdl7vixiWMDnxF5Is9sgSD-ncH8K9WsmUguQxSSHkxW8AvKzq0P9~U4~tV8MgvyWA-k~4ekNmF5eX3IfJCH-Lam8f-H4GXu7SFmYyMBg8jKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 3,
        title: 'Training Program Name 03',
        rating: 3.7,
        length: '7 Min',
        image:
          'https://s3-alpha-sig.figma.com/img/4d9f/3b4d/5faa38fe0775cf6c0907ee2d16caed0c?Expires=1694390400&Signature=KsRO5qOkxphyoe61fmlffzYVhcQnemrn999P8IoPafRETecgXJ6XgOIOytKwTn7Y3b792ma3OTxhTSBfGQAjDsiCesZ-f~apt-vUtdc40KN2BtWoIfnPAaDKXLHshR~O1mXcTRXUpCiJQirnPxbdF2AwVkL7ClUA3EqtOUt8XmP4uzFBh9DHLeS5Fp9p2pHyS0TtIYfjM0kHurpw47ilPDMDiMEpfNeJH-FDC8g3IzYdk6YOk9yB9Qo8RnxpdIOwPyv~aYFMBwz40eevOx6qGUzgLzX6cM36KGyZW~54cM83yEQnieUcCZc-Te1D4xl5txJ4HnYwvHydZEQU~iV0EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
    ],
  },
];
