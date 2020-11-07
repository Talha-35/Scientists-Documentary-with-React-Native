import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
} from 'react-native';

const post_data = [
  {
    id: 0,
    userName: 'Tesla Nikola',
    img:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg',
    description:
      'Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.',
    isLiked: false,
  },
  {
    id: 1,
    userName: 'Albert Einstein',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81XrGrp-E9L._AC_SL1500_.jpg',
    description:
      'Do nulla ex minim ut magna qui do aute Lorem pariatur duis pariatur pariatur ipsum. Et aliqua dolore non voluptate duis aliqua qui. Laboris voluptate est minim in anim cillum dolore.',
    isLiked: false,
  },
  {
    id: 2,
    userName: 'Thomas Edison',
    img:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wpap-of-thomas-alva-edison-andiko-arya-nugraha.jpg',
    description:
      'Anim veniam esse proident amet nostrud id ut ullamco sint non pariatur Lorem. Veniam veniam qui ex exercitation irure pariatur cillum culpa ex fugiat ipsum ipsum. Qui sunt sit ut et nisi cupidatat amet proident magna.',
    isLiked: false,
  },
  {
    id: 3,
    userName: 'Marie Curie',
    img:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-marie-curie-artwork-taoteching-art.jpg',
    description:
      'Ullamco culpa ipsum pariatur eu ullamco tempor labore nostrud eiusmod. Labore ut adipisicing deserunt proident excepteur Lorem incididunt eu. Quis anim ullamco ullamco est commodo.',
    isLiked: false,
  },
  {
    id: 4,
    userName: 'Isaac Newton',
    img:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfc73392-beb8-4683-848d-8df54d8d99a0/d9qoe6t-abf01baf-d31c-4e1f-8b8a-df0a7328b2df.jpg/v1/fill/w_1024,h_1449,q_75,strp/sir_isaac_newton_on_wpap_by_andikoarya_d9qoe6t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjNzMzOTItYmViOC00NjgzLTg0OGQtOGRmNTRkOGQ5OWEwXC9kOXFvZTZ0LWFiZjAxYmFmLWQzMWMtNGUxZi04YjhhLWRmMGE3MzI4YjJkZi5qcGciLCJoZWlnaHQiOiI8PTE0NDkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9kZmM3MzM5Mi1iZWI4LTQ2ODMtODQ4ZC04ZGY1NGQ4ZDk5YTBcL2FuZGlrb2FyeWEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.m0AFm8EI-uE2zGzrn-V7OzSmO6L5D7QvkYRU9iTncKg',
    description:
      'Ipsum commodo Lorem adipisicing duis dolor Lorem tempor enim laboris labore ullamco velit quis. Fugiat sit exercitation labore nulla adipisicing eiusmod Lorem do cillum mollit. Tempor elit duis ex tempor sint.',
    isLiked: false,
  },
];

const MainPage = () => {
  return (
    <ScrollView>
      <View style={{flex: 1 , backgroundColor : '#ffffff' }}>
        <View style={styles.conta}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg',
            }}
          />
          <View style={styles.conta2}>
            <Text style={styles.text1}>Nikola Tesla</Text>
            <Text style={styles.text2}>
              Nikola Tesla 10 July 1856 – 7 January 1943) was a Serbian-American
              inventor, electrical engineer, mechanical engineer, and futurist
              best known for his contributions to the design of the modern
              alternating current (AC) electricity supply system.
            </Text>
          </View>
        </View>

        <View style={styles.conta}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/81XrGrp-E9L._AC_SL1500_.jpg',
            }}
          />
          <View style={styles.conta2}>
            <Text style={styles.text1}>Albert Einstein</Text>
            <Text style={styles.text2}>
              Albert Einstein ; 14 March 1879 – 18 April 1955) was a German-born
              theoretical physicist[5] who developed the theory of relativity,
              one of the two pillars of modern physics (alongside quantum
              mechanics). 274 His work is also known for its influence on the
              philosophy of science.
            </Text>
          </View>
        </View>

        <View style={styles.conta}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfc73392-beb8-4683-848d-8df54d8d99a0/d9qoe6t-abf01baf-d31c-4e1f-8b8a-df0a7328b2df.jpg/v1/fill/w_1024,h_1449,q_75,strp/sir_isaac_newton_on_wpap_by_andikoarya_d9qoe6t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjNzMzOTItYmViOC00NjgzLTg0OGQtOGRmNTRkOGQ5OWEwXC9kOXFvZTZ0LWFiZjAxYmFmLWQzMWMtNGUxZi04YjhhLWRmMGE3MzI4YjJkZi5qcGciLCJoZWlnaHQiOiI8PTE0NDkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9kZmM3MzM5Mi1iZWI4LTQ2ODMtODQ4ZC04ZGY1NGQ4ZDk5YTBcL2FuZGlrb2FyeWEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.m0AFm8EI-uE2zGzrn-V7OzSmO6L5D7QvkYRU9iTncKg',
            }}
          />
          <View style={styles.conta2}>
            <Text style={styles.text1}>Isaac Newton</Text>
            <Text style={styles.text2}>
              Sir Isaac Newton (25 December 1642 – 20 March 1726/27[a]) was an
              English mathematician, physicist, astronomer, theologian, and
              author who is widely recognised as one of the most influential
              scientists of all time and as a key figure in the scientific
              revolution. .
            </Text>
          </View>
        </View>

        <View style={styles.conta}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wpap-of-thomas-alva-edison-andiko-arya-nugraha.jpg',
            }}
          />
          <View style={styles.conta2}>
            <Text style={styles.text1}>Thomas Edison</Text>
            <Text style={styles.text2}>
              Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an
              American inventor and businessman who has been described as
              America's greatest inventor. He developed many devices in fields
              such as electric power generation, mass communication, sound
              recording, and motion pictures
            </Text>
          </View>
        </View>

        <View style={styles.conta}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-marie-curie-artwork-taoteching-art.jpg',
            }}
          />
          <View style={styles.conta2}>
            <Text style={styles.text1}>Maria Curie</Text>
            <Text style={styles.text2}>
              Marie Skłodowska Curie born Maria Salomea Skłodowska ; 7 November
              1867 – 4 July 1934, was a Polish and naturalized-French physicist
              and chemist who conducted pioneering research on radioactivity.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export {MainPage};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3,
    borderRadius: 5,
    marginVertical: 5,
  },
  conta: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 3,
    padding: 3,
    overflow: 'hidden',
  },
  conta2: {
    flexDirection: 'column',
    //   alignItems : "center" ,
  },
  text1: {
    marginLeft: 40,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    marginLeft: 10,
    marginRight: 220,
    textAlign: 'justify',
  },
});
