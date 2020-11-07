import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const PostCard = (props) => {
  return (
    <TouchableWithoutFeedback 
    onPress={props.onSelect}
    // style={styles.container}
    >
      <View>
        <Image style={styles.image} source={{uri: props.post.img}} />
        <Text style={styles.name}>{props.post.userName}</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {props.post.description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    marginBottom: 10,
    marginHorizontal : 8
  },
});
