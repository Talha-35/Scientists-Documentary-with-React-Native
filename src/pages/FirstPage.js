import React, {useState} from 'react'
import { StyleSheet, Text, View , TouchableOpacity,FlatList } from 'react-native'

import PostCard from '../components/PostCard'


const post_data = [
    {
        "id": 0,
        "userName": "Tesla Nikola",
        "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
        "description": "Nikola Tesla 10 July 1856 – 7 January 1943) was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system. ",
        "isLiked": false
    },
    {
        "id": 1,
        "userName": "Albert Einstein",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81XrGrp-E9L._AC_SL1500_.jpg",
        "description": "Albert Einstein ; 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). 274 His work is also known for its influence on the philosophy of science.",
        "isLiked": false
    },
    {
        "id": 2,
        "userName": "Thomas Edison",
        "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wpap-of-thomas-alva-edison-andiko-arya-nugraha.jpg",
        "description": "   Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an American inventor and businessman who has been described as America's greatest inventor. He developed many devices in fields such as electric power generation, mass , sound recording, and motion pictures",
        "isLiked": false
    },
    {
        "id": 3,
        "userName": "Marie Curie",
        "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-marie-curie-artwork-taoteching-art.jpg",
        "description": "Marie Skłodowska Curie born Maria Salomea Skłodowska ; 7 November 1867 – 4 July 1934, was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.",
        "isLiked": false
    },
    {
        "id": 4,
        "userName": "Isaac Newton",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfc73392-beb8-4683-848d-8df54d8d99a0/d9qoe6t-abf01baf-d31c-4e1f-8b8a-df0a7328b2df.jpg/v1/fill/w_1024,h_1449,q_75,strp/sir_isaac_newton_on_wpap_by_andikoarya_d9qoe6t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjNzMzOTItYmViOC00NjgzLTg0OGQtOGRmNTRkOGQ5OWEwXC9kOXFvZTZ0LWFiZjAxYmFmLWQzMWMtNGUxZi04YjhhLWRmMGE3MzI4YjJkZi5qcGciLCJoZWlnaHQiOiI8PTE0NDkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9kZmM3MzM5Mi1iZWI4LTQ2ODMtODQ4ZC04ZGY1NGQ4ZDk5YTBcL2FuZGlrb2FyeWEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.m0AFm8EI-uE2zGzrn-V7OzSmO6L5D7QvkYRU9iTncKg",
        "description": "Sir Isaac Newton (25 December 1642 – 20 March 1726/27[a]) was an English mathematician, physicist, astronomer, theologian, and author who is widely recognised as one of the most influential scientists of all time and as a key figure in the scientific revolution. .",
        "isLiked": false
    },
]    

const FirstPage = (props) => {
    
    const renderData = ({item}) => <PostCard post={item} onSelect={() => props.navigation.navigate('Second Page' , {data : item})} />
    

    return (
        <View style={{flex : 1}}>
            
            <FlatList
            keyExtractor = {(item,index) => item.id.toString()}
            data = {post_data}
            renderItem = {renderData}
            ItemSeparatorComponent = {() => <View style={{borderWidth : 1 , borderColor : 'gray', marginVertical : 5}} />}
            />
            
        </View>
    )
}

export  {FirstPage} ;

const styles = StyleSheet.create({
    container : {
       
        backgroundColor : 'black' ,
        padding : 10 ,
        marginHorizontal : 70,
        borderRadius : 10 ,
        position :  "absolute",
        bottom : 10 ,
        left : 50
    },
    text : {
        
        color : 'white' ,
        textAlign : "center",
        fontSize : 25
    },
    input : {
        marginTop : 150,
        padding : 10 ,
        margin : 10 ,
        backgroundColor : '#e0f7fa' ,
        borderWidth : 1
    }

})
