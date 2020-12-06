import { Container, Content, Text } from 'native-base';
import { Alert } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppBackground, CustomButton, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { Colors, Icons } from '../../theme';
import styles from './styles/DetailScreenScreenStyles';

const DetailScreenScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.welcome);

  const onVariationPress = (type) => {
    Alert.alert(`You pressed variation ${type}`);
  };
  const renderButtons = () => {
    return (
      <>
        <Text style={styles.btnContainerTitle}>{Strings.variationTitle}</Text>
        <CustomButton
          title={Strings.btnV1}
          style={[styles.btnVariation, { backgroundColor: Colors.transparent }]}
          onPress={() => onVariationPress(1)}
        />
        <CustomButton
          title={Strings.btnV2}
          style={[
            styles.btnVariation,
            { backgroundColor: Colors.btnOrangeNeutral }
          ]}
          onPress={() => onVariationPress(2)}
        />
        <CustomButton
          title={Strings.btnV3}
          style={[styles.btnVariation, { backgroundColor: Colors.btnOrange }]}
          onPress={() => onVariationPress(3)}
        />
      </>
    );
  };

  return (
    <Container>
      <AppBackground>
        <CustomHeader
          right
          left
          title={user}
          leftIcon={Icons.back}
          leftOnPress={() => navigation.goBack()}
        />
        <Content contentContainerStyle={styles.container}>
          {renderButtons()}
        </Content>
      </AppBackground>
    </Container>
  );
};

export default DetailScreenScreen;
