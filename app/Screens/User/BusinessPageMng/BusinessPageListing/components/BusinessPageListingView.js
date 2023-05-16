import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import EmptyList from "../../../../../Components/EmptyList";
import { MainItemsView } from "../../../../../Components/ListItemsView";
import CommonStyles from "../../../../../Utils/CommonStyles";
import { COLORS } from "../../../../../Utils/Constant";
import styles from "./styles";
import MainHeader from "../../../../../Components/MainHeader";
import { businessTypeOptions } from "../../../../../Utils/staticData";
import ScaleText from "../../../../../Components/ScaleText";
import ListingView from "../../../../../Components/ListingView";

const BusinessPageListingView = (props) => {
  const [allSelect, setAllSelect] = useState(false);
  return (
    <View style={CommonStyles.container}>
      <MainHeader headerType={"logo"} />
      <ScaleText style={styles.headText}>Business Listing</ScaleText>
      <ListingView
        keyExtractor={(item, index) => index.toString()}
        data={props.businessList}
        ListEmptyComponent={() => {
          return <EmptyList message={"Restaurant"} />;
        }}
        ListHeaderComponent={() => {
          return (
            <>
              {props?.search?.business_type?.toString() === "1" ? (
                <ScrollView
                  contentContainerStyle={styles.straightVw}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <>
                    <TouchableOpacity
                      style={[
                        styles.topContainer,
                        {
                          backgroundColor: allSelect ? COLORS.YELLOW : null,
                        },
                      ]}
                      onPress={() => {
                        props.handleOptions([]);
                        setAllSelect(true);
                      }}
                    >
                      <ScaleText style={styles.topContainerTxt}>
                        {"All"}
                      </ScaleText>
                    </TouchableOpacity>
                  </>
                  {businessTypeOptions?.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.topContainer,
                          {
                            backgroundColor: props?.search?.selectOption
                              ?.toString()
                              ?.includes(item.type)
                              ? COLORS.YELLOW
                              : null,
                          },
                        ]}
                        onPress={() => {
                          props.handleOptions(item);
                          setAllSelect(false);
                        }}
                      >
                        <ScaleText style={styles.topContainerTxt}>
                          {item.name}
                        </ScaleText>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              ) : null}
            </>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <MainItemsView
              onPressView={props.onPressView}
              item={item}
              index={index}
              largeImg={item?.logo}
              largeName={item?.business_name}
              smallTxt={item?.business_service_category}
              rating={item?.rating}
              rowImgTxt1={item?.business_service_category}
              rowImgTxt2={item?.create_date}
              rowImgTxt3={item?.about_business}
            />
          );
        }}
        onEndReached={() => {
          if (props?.search) {
            if (props?.businessList?.length < props?.moreData) {
              props?.handleSearchData(
                props?.businessList?.length > 4 ? props.offSet + 5 : 0,
                props?.search
              );
            }
          }
        }}
        onRefresh={() =>
          props.handleSearchData(0, { ...props.search, selectOption: [] })
        }
      />
    </View>
  );
};
export default BusinessPageListingView;
