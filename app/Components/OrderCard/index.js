import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import ScaleText from "../ScaleText";
import moment from "moment";
import FastImages from "../FastImage";

const OrderCard = (props) => {
  const { item, onpressOrder } = props;
  return (
    <TouchableOpacity
      style={styles.ConatinView}
      onPress={() => onpressOrder(item)}
    >
      <View style={styles.imageView}>
        <FastImages
          style={styles.DishImgeStyle}
          resizeMode="contain"
          source={{ uri: item.logo }}
        />
      </View>
      <View style={styles.DishDiscptnView}>
        <ScaleText>Order Id: {item.order_id}</ScaleText>

        {item.business_type == 1 ? (
          item.order_booking_type > 0 && (
            <ScaleText>
              Order Type:{" "}
              {item.order_booking_type === 1
                ? "Food Order"
                : item.order_booking_type === 2
                ? "Items Order"
                : item.order_booking_type === 3
                ? "Table Book"
                : item.order_booking_type === 4 && "Outside Booking"}
            </ScaleText>
          )
        ) : (
          <ScaleText>
            Order Type:{" "}
            {item.business_type === 2
              ? "Items Order"
              : item.business_type === 3
              ? "Service Book"
              : item.business_type === 4
              ? "Events"
              : item.business_type === 5 && "Job apply"}
          </ScaleText>
        )}
        <ScaleText>
          {moment(item.create_order).format("DD/MM/YYYY HH:MM a")}
        </ScaleText>
        <ScaleText>Order status: {" "}
          {item.order_status === 0
            ? "Pending"
            : item.order_status === 1
            ? "Accepted"
            : item.order_status === 2
            ? "In Process"
            : item.order_status === 3
            ? "Canceled"
            : item.order_status === 4
            ? "Cancel by Owner"
            : item.order_status === 5 && "Compleate"}
        </ScaleText>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
