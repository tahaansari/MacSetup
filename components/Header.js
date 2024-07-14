import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "This is the default prop",
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
