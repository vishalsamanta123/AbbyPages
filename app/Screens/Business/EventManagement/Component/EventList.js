import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../../../Components/Header'
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from '../../../../Utils/Constant'

const EventList = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: WHITE_COLOR_CODE }}>
      <Header
        HeaderText='Events'
        RightImg={null}
        leftImg={require('../../../../Assets/hamburger_icon.png')}
        type="Drawer"
      />
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <Text style={{ color: BLACK_COLOR_CODE, fontSize: 20, fontWeight: 'bold' }}>
            Create an Event
          </Text>
          <TouchableOpacity>
            <Image style={{ width: 35, height: 35 }} source={require('../../../../Assets/qty_minus_icon3.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={props?.eventData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderWidth: 0.5,
                  marginVertical: 10
                }}
              >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{ uri: item?.events_image }}
                    style={{
                      width: 100,
                      height: 100,
                      // borderRadius: 10
                    }}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, color: BLACK_COLOR_CODE, fontWeight: 'bold' }}>{item?.event_name}</Text>
                    <Text>{item?.event_description}</Text>
                    <Text>{item?.event_location}</Text>
                    <Text>{item?.interested} Interested </Text>
                  </View>

                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default EventList

const styles = StyleSheet.create({})