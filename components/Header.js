import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 15,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default Header;
