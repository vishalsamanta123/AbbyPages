import { StyleSheet } from "react-native";
import { WHITE_COLOR_CODE } from "../../Utils/Constant";

const styles = StyleSheet.create({
  headCon: {
    paddingHorizontal: 8,
    backgroundColor: WHITE_COLOR_CODE,
  },
  blockCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoVw: {
    width: 190,
    height: 50,
  },
});
export default styles;
