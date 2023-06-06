import { FlatList, View } from "react-native";
import React from "react";
import ScaleText from "../../../../../Components/ScaleText";
import CommonStyles from "../../../../../Utils/CommonStyles";
import styles from "./styles";
import { RowSingleTxtList } from "../../../../../Components/ListItemsView";
import { modalTypes } from "../../../../../Utils/staticData";
import MainHeader from "../../../../../Components/MainHeader";
import { COLORS } from "../../../../../Utils/Constant";

const FavoriteView = (props) => {
  const {selected_modal, setSelected_modal} = props
  return (
    <View style={CommonStyles.container}>
      <MainHeader
        headerText={"Favorite"}
        loginButton={false}
        TxtMarginRight={"5%"}
        backText={false}
      />
      <View style={styles.topCont}>
        <FlatList
          data={modalTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <RowSingleTxtList
              text={item.modal_name}
                txtColor={
                  item.business_type === selected_modal
                    ? COLORS.YELLOW
                    : COLORS.BLACK
                }
                borderColor={
                  item.business_type === selected_modal
                    ? COLORS.YELLOW
                    : COLORS.BLACK
                }
                onPressItem={() => {
                  if (item.business_type != selected_modal) {
                    setSelected_modal(item.business_type);
                  }
                }}
                borderBottomWidth={
                  item.business_type === selected_modal ? 1 : 0
                }
            />
          )}
        />
      </View>
    </View>
  );
};

export default FavoriteView;
