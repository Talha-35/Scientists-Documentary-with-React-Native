import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const SecondPage = (props) => {
  const myData = props.route.params.data;

  return (
    <SafeAreaView>
      <View>
        <Image style={styles.image} source={{uri: myData.img}} />
        <Text style={styles.name}>{myData.userName}</Text>
        <Text style={styles.desc}>{myData.description}</Text>

        <TouchableOpacity
          style={styles.touch}
          onPress={() => props.navigation.goBack()}>
          <Text style={styles.touchText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {SecondPage};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: '#f5f5f5',
  //   },
  image: {
    marginTop: 15,
    height: Dimensions.get('window').height / 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  desc: {
    marginBottom: 20,
  },
  touch: {
    backgroundColor: '#808080',
    padding: 10,
    marginHorizontal: 100,
    borderRadius: 10,
  },
  touchText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight : "bold"
  },
});
