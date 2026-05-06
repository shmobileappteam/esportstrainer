import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';
import Header from '../components/Header';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';

const FillData = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    firstName: '',
    lastName: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header label="Fill Your Data" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Username</Text>
        <TextInputComponent
          text={data.username}
          setText={setData}
          formKey="username"
        />
        <Text style={styles.label}>First Name</Text>
        <TextInputComponent
          text={data.firstName}
          setText={setData}
          formKey="firstName"
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInputComponent
          text={data.lastName}
          setText={setData}
          formKey="lastName"
        />

        <View style={{marginBottom: 50}} />
        <ButtonComponent
          buttonLabel="Finish & Get Started"
          type="primary"
          onPress={() => navigation.navigate('Interests')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FillData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: CONTAINER_PADDING,
  },

  label: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.tertiary,
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
});
