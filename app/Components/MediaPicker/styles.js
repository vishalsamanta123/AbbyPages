import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../Utils/Constant";

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
  },
  previewView: {
    flex: 4,
  },
  pickerModalCon: {},
  straightVw: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentsVw: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  componentsTxt:{
    fontSize: FONT_SIZE.medium,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: "center",
  }
});

export default styles;
