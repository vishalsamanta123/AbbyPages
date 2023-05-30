import React from "react";
import {
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
  check,
} from "react-native-permissions";
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";
import { Constants } from "./Constant";
import { Alert, Linking } from "react-native";
import moment from "moment";
import Share from "react-native-share";

export const handlePermission = async (
  permission,
  msgHeading = "Permission",
  message = "txt_setting_access"
) => {
  let result = "";
  switch (permission) {
    case "camera":
      result = await check(
        Constants.Ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
      );
      break;
    case "gallery":
      result = await check(
        Constants.Ios
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
      break;
    case "microPhone":
      result = await check(
        Constants.Ios
          ? PERMISSIONS.IOS.MICROPHONE
          : PERMISSIONS.ANDROID.RECORD_AUDIO
      );
      break;
    case "write":
      result = permissionWrite("check");
      break;
  }
  let res = false;
  console.log("result", result);
  switch (await result) {
    case RESULTS.UNAVAILABLE:
      res = requestPermission(permission, msgHeading, message);
      break;
    case RESULTS.DENIED:
      res = requestPermission(permission, msgHeading, message);
      break;
    case RESULTS.LIMITED:
      res = true;
      break;
    case RESULTS.GRANTED:
      res = true;
      break;
    case RESULTS.BLOCKED:
      res = "setting1";
      // openPermissionSetting(msgHeading, message);
      break;
  }
  return await res;
};

export const permissionWrite = async (type = "request") => {
  const res = (type = "request"
    ? await request(
        Constants.Ios
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      )
    : await check(
        Constants.Ios
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      ));
  return res;
};
export const checkPermissions = async (permission) => {
  let result = "";
  switch (permission) {
    case "camera":
      result = await check(
        Constants.Ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
      );
      break;
    case "gallery":
      result = await check(
        Constants.Ios
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
      break;
  }
  let res = false;
  switch (await result) {
    case RESULTS.UNAVAILABLE:
      break;
    case RESULTS.DENIED:
      res = "denied";
      break;
    case RESULTS.LIMITED:
      res = true;
      break;
    case RESULTS.GRANTED:
      res = true;
      break;
    case RESULTS.BLOCKED:
      res = "setting1";
      break;
  }
  return await res;
};
export const requestPermission = async (permission, msgHeading, message) => {
  let reqRes = "";
  switch (permission) {
    case "camera":
      reqRes = await request(
        Constants.Ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
      );
      break;
    case "location":
      reqRes = await request(
        Constants.Ios
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      );
      break;
    case "gallery":
      reqRes = await request(
        Constants.Ios
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
      break;
    case "microPhone":
      reqRes = await request(
        Constants.Ios
          ? PERMISSIONS.IOS.MICROPHONE
          : PERMISSIONS.ANDROID.RECORD_AUDIO
      );
      break;
    case "write":
      reqRes = permissionWrite();
      break;
  }
  let res = false;
  console.log("reqRes", reqRes);
  switch (await reqRes) {
    case RESULTS.UNAVAILABLE:
      openPermissionSetting(msgHeading, message);
      break;
    case RESULTS.DENIED:
      res = false;
      break;
    case RESULTS.LIMITED:
      break;
    case RESULTS.GRANTED:
      res = true;
      break;
    case RESULTS.BLOCKED:
      res = "setting1";
      break;
  }
  return await res;
};
export const requestPermissions = async (permission) => {
  let reqRes = "";
  switch (permission) {
    case "camera":
      reqRes = await request(PERMISSIONS.ANDROID.CAMERA);
      break;
    case "location":
      reqRes = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      break;
    case "gallery":
      reqRes = await request(
        Constants.Ios
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
      break;
    case "write":
      reqRes = await permissionWrite();
      break;
  }
  let res = false;
  switch (reqRes) {
    case RESULTS.UNAVAILABLE:
      //  openPermissionSetting(msgHeading, message);
      break;
    case RESULTS.DENIED:
      res = false;
      break;
    case RESULTS.LIMITED:
      res = true;
      break;
    case RESULTS.GRANTED:
      res = true;
      break;
    case RESULTS.BLOCKED:
      // res = 'setting2';
      res = false;
      // openPermissionSetting(
      //   'Camera & Media Permission',
      //   strings.txt_setting_media_camera,
      // );
      break;
  }
  return await res;
};

export const openPermissionSetting = (
  msgHeading,
  message,
  onPressCancel = () => {}
) => {
  Alert.alert(msgHeading, message, [
    {
      text: "Not Now",
      onPress: () => onPressCancel(),
      style: "cancel",
    },
    { text: "settings", onPress: () => openSettings() },
  ]);
};

export const OpenDoc = async (url) => {
  function getUrlExtension(url) {
    return url.split(/[#?]/)[0].split(".").pop().trim();
  }
  const extension = getUrlExtension(url);
  const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;
  const options = {
    fromUrl: url,
    toFile: localFile,
  };
  RNFS.downloadFile(options)
    .promise.then(() => FileViewer.open(localFile))
    .then((r) => {
      console.log("r", r);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
export const getAmount = (amount) => {
  if (amount === "" || amount === null) {
    return 0;
  } else {
    return Number(parseFloat(amount).toFixed(2)).toLocaleString("en", {
      minimumFractionDigits: 0,
    });
  }
};

export const removeHttp = (url) => {
  let finalUrl = url;
  if (finalUrl?.includes("https://www.")) {
    return finalUrl?.replace(/^https?:\/\/www./, "");
  }
  if (finalUrl?.includes("http://www.")) {
    return finalUrl?.replace(/^http?:\/\/www./, "");
  }
  if (finalUrl?.includes("https://")) {
    return finalUrl?.replace(/^https?:\/\//, "");
  }
  if (finalUrl?.includes("http://")) {
    return finalUrl?.replace(/^http?:\/\//, "");
  }
  if (finalUrl?.includes("www.")) {
    return finalUrl?.replace(/^www./, "");
  }
  return finalUrl;
};

export const RECENT_TIME_FORMAT = (time) => {
  if (time === "" || time === null || time === undefined) {
    return "";
  } else {
    return moment.unix(time).format(Constants.TIME_DATE_FORMAT);
  }
};

export const handleBusinessNav = async (options) => {
  if (options?.type?.includes("Business")) {
    const supported = await Linking.canOpenURL(options.url);
    if (supported) {
      await Linking.openURL(options.url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${options.url}`);
    }
  }
};

export const handleSharePress = async (data) => {
  const {
    title = "",
    message = "",
    urlName = "",
    imageUrl = "",
    image = "",
  } = data;
  try {
    const result = await Share.open({
      message: message,
      url: `https://abbypages.com/business/${urlName?.split(" ").join("-")}`,
      title: title,
      backgroundImage: image,
      // imageUrl: `https://abbypages.com/business/${imageUrl?.substring(
      //   imageUrl?.lastIndexOf("/") + 1
      // )}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // Shared successfully
      } else {
        // Share cancelled
      }
    } else if (result.action === Share.dismissedAction) {
      // Share dismissed
    }
  } catch (error) {
    // Error while sharing
  }
};
