import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


type Props = {
  onPress: () => void;
  img: any;
  title?: string;
};

export default function FlagButton(props: Props) {

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} >
      <Image source={props.img} />
      <Text style={{ fontSize: 17, fontWeight: '400', color: '#000' }}>{props.title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    backgroundColor: '#fff',
    gap: 44,
    paddingVertical: 17,
    paddingHorizontal: 27,
    borderRadius: 45,
    alignItems: "center"
  }
})