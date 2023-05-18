import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ScaleText from "../ScaleText";
import { IconX } from "../Icons/Icon";
import { COLORS, Constants } from "../../Utils/Constant";
import styles from "./styles";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

const DateTimeModal = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    paddingVertical = 15,
    backgroundColor = COLORS.WHITE,
    placeholder = "Date Time",
    headTxtBackColor = COLORS.WHITE,
    headTxt = placeholder,
    value = "",
    header = true,
    borderRadius = 18,
    rightImgName = "",
    rightImgSize = 22,
    rightImgOrigin = "",
    rightImgColor = COLORS.DARK_PURPLE,
    leftImgName = "",
    leftImgSize = 22,
    leftImgOrigin = "",
    leftImgColor = COLORS.DARK_PURPLE,
    marginTop = 16,
    borderColor = COLORS.GREY,
    onPressokButton = () => {},
    onPressCancelButton = () => {},
    mode = "datetime",
  } = props;
  return (
    <TouchableOpacity
      onPress={() => setOpenModal(true)}
      style={[
        styles.mainCont,
        {
          paddingVertical: paddingVertical,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginTop: marginTop,
          borderColor: borderColor,
        },
      ]}
    >
      {header && (
        <View
          style={[
            styles.headTxtVw,
            {
              backgroundColor: headTxtBackColor,
            },
          ]}
        >
          <ScaleText style={styles.headTxt}>{headTxt}</ScaleText>
        </View>
      )}
      {leftImgName != "" && leftImgOrigin != "" ? (
        <View style={styles.iconVw}>
          <IconX
            origin={leftImgOrigin}
            name={leftImgName}
            size={leftImgSize}
            color={leftImgColor}
          />
        </View>
      ) : null}
      <ScaleText style={styles.inputCon}>
        {value === "" || value === null || value === undefined
          ? placeholder
          : value}
      </ScaleText>
      {rightImgName != "" && rightImgOrigin != "" ? (
        <View style={styles.iconVw}>
          <IconX
            origin={rightImgOrigin}
            name={rightImgName}
            size={rightImgSize}
            color={rightImgColor}
          />
        </View>
      ) : null}
      <DateTimePicker
        value={new Date()}
        mode={mode}
        isVisible={openModal}
        onConfirm={(data) => {
          onPressokButton(
            mode === "time"
              ? moment(data).format(Constants.TIME_FORMAT)
              : mode === "date"
              ? moment(data).format(Constants.DATE_FORMAT)
              : moment(data).format(Constants.TIME_DATE_FORMAT)
          );
          setOpenModal(false);
        }}
        onCancel={(data) => {
          setOpenModal(false);
          onPressCancelButton(data);
        }}
      />
    </TouchableOpacity>
  );
};

export default DateTimeModal;
