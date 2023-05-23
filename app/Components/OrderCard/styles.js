import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Constant";

const styles = StyleSheet.create({
  ConatinView: {
    flex: 1,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
    marginBottom: 5,
    borderColor: COLORS.BORDER_LINE,
    // backgroundColor: 'red',
    paddingVertical: 10
  },
  DishImgeStyle: {
    width: 100,
    height: 100,
    margin: 2,
    borderRadius: 10,
    margin: 10,
  },
  imageView: {
    flex: 2,
  },
  DishDiscptnView: {
    flex: 4,
  },
});

export default styles;
