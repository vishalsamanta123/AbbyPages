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
import { Alert } from "react-native";

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
  console.log("url: ", url);
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
      // console.log("r", r);
      // success
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
