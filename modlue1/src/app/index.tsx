import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, ScrollView, RefreshControl } from "react-native";




export default function Index() {
  const [ inputText, setInputText] = useState('')
  return (
    <ScrollView scrollEnabled={true} refreshControl={<RefreshControl refreshing={false} onRefresh={()=>(setInputText('Refresh'))} />}>
      <Text style={styles.header}>Texting</Text>
      <Text style={styles.motoText}>its {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
        <Text style={{ fontStyle: 'italic', backgroundColor: '#fff' }}>testing</Text> of compoents</Text>
      <Text numberOfLines={4} ellipsizeMode="head" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem exercitationem ex perspiciatis quaerat id corrupti maiores sint ut repellat doloremque praesentium, laudantium ab dolor veniam voluptates deserunt consequuntur facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem ab non ut nobis excepturi enim minus modi cupiditate voluptatibus neque, dignissimos beatae, perferendis et id voluptatum magnam voluptate placeat.</Text>

      <TextInput placeholderTextColor={'#922626'} keyboardType="number-pad" inputMode="search" value={inputText} onChangeText={setInputText} style={{borderColor:'red', borderWidth: 2, margin: 10}}  placeholder="Enter your Text"/>
<Text>{inputText}</Text>

    <Pressable disabled={false} 
    onPressOut={()=>(setInputText(`Press Out`))}
    onPressIn={()=>(setInputText(`Pres In`))}
    onPress={()=>(setInputText(`${Math.floor(Math.random()*100)}`))}
    onLongPress={()=>(setInputText(`on LOng Press`))}
    >
      <Image style={{ width: 200, height: 200 }} resizeMode="stretch" source={require('@/assets/image.png')} />
      <Image style={{ width: 200, height: 200 }} blurRadius={1} resizeMode="stretch" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIF4NrLIiTp_pU5MdqQkcC-l9aHUGSZBqcg&s' }} />
<Text style={styles.header}>Click Me</Text></Pressable>
    <ScrollView>
      <Text style={styles.header}>Texting</Text>
      <Text style={styles.motoText}>its {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
        <Text style={{ fontStyle: 'italic', backgroundColor: '#fff' }}>testing</Text> of compoents</Text>
      <Text numberOfLines={4} ellipsizeMode="head" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem exercitationem ex perspiciatis quaerat id corrupti maiores sint ut repellat doloremque praesentium, laudantium ab dolor veniam voluptates deserunt consequuntur facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem ab non ut nobis excepturi enim minus modi cupiditate voluptatibus neque, dignissimos beatae, perferendis et id voluptatum magnam voluptate placeat.</Text>

      <TextInput placeholderTextColor={'#922626'} keyboardType="number-pad" inputMode="search" value={inputText} onChangeText={setInputText} style={{borderColor:'red', borderWidth: 2, margin: 10}}  placeholder="Enter your Text"/>
<Text>{inputText}</Text>

    <Pressable disabled={false} 
    onPressOut={()=>(setInputText(`Press Out`))}
    onPressIn={()=>(setInputText(`Pres In`))}
    onPress={()=>(setInputText(`${Math.floor(Math.random()*100)}`))}
    onLongPress={()=>(setInputText(`on LOng Press`))}
    >
      <Image style={{ width: 200, height: 200 }} resizeMode="stretch" source={require('@/assets/image.png')} />
      <Image style={{ width: 200, height: 200 }} blurRadius={1} resizeMode="stretch" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIF4NrLIiTp_pU5MdqQkcC-l9aHUGSZBqcg&s' }} />
<Text style={styles.header}>Click Me</Text></Pressable>
    </ScrollView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  header: {
    color: '#3417c4', fontSize: 48, fontWeight: 100, alignSelf: 'center', backgroundColor: '#56626d'
  },
  motoText: {
    alignSelf: 'center',
    backgroundColor: 'red'
  }
})