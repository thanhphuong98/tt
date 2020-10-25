import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Linking} from 'react-native';

export default class InfoComponent extends Component{
    
    render(){
        return(
            <View>
                <Text style={styles.logo}>Bình Liêu APP</Text>
                <View>
                    <Text style={styles.title}>Thông tin</Text>
                    <TouchableHighlight onPress={
                        () => Linking.canOpenURL("fb://profile/100007400082808").then(supported => {
                            if (supported) {
                            return Linking.openURL("fb://profile/100007400082808");
                            } else {
                            return Linking.openURL("https://www.facebook.com/lathanhhanh");
                            }
                        })
                        }>
                        <Text style={styles.item}>Facebook: facebook.com/lathanhhanh</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                         onPress={()=>{Linking.openURL('mailto:lathanh4321@gmail.com?subject=Góp ý ứng dụng Bình Liêu APP&body=Nội dung góp ý')}}
                    >
                        <Text style={styles.item}>Email: lathanh4321@gmail.com</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{Linking.openURL('http://lathanhhanh.tk')}}>
                        <Text style={styles.item}>Website: http://lathanhhanh.tk</Text>
                    </TouchableHighlight>
                    <Text style={styles.mota} numberOfLines={5}>Bình Liêu APP hỗ trợ tìm kiếm xe khách, tìm kiếm taxi trong địa bàn huyện Bình Liêu</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo:{
        fontSize:40, 
        padding:50, 
        backgroundColor:'#F2F2F2',
        color:'green',
        alignItems: 'center'
    },
    item:{
        height: 50,
        marginLeft:10,
        marginRight:10,
        fontSize: 16,
        borderRadius: 10,
        color: '#828282',
        backgroundColor:'#f2f3f5',
        padding:15,
        marginTop:5,
        marginBottom:5
    },
    title:{
        height: 50,
        lineHeight:50,
        marginLeft:10,
        marginRight:10,
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth:1
    },
    mota:{
        borderTopWidth: 1,
        height: 200,
        lineHeight:40,
        marginLeft:10,
        marginRight:10,
        fontSize: 18,
        color: '#828282'
    }
})