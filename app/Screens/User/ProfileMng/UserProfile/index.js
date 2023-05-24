import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
const UserProfileView = () => {
  const [findFriends, setFindFriends] = useState(true);
  const [bookmarks, setBookmarks] = useState(true);
  const [directMessageFromBussiness, setDirectMessageFromBussiness] =
    useState(true);
  const [adsDisplayElseWhere, setAdsDisplayElseWhere] = useState(true);
  const _handleCheckBox = (item, setBoxValue) => {
    setBoxValue(!item);
  };
  return (
    <UserProfile
      _handleCheckBox={_handleCheckBox}
      findFriends={findFriends}
      setFindFriends={setFindFriends}
      bookmarks={bookmarks}
      setBookmarks={setBookmarks}
      directMessageFromBussiness={directMessageFromBussiness}
      setDirectMessageFromBussiness={setDirectMessageFromBussiness}
      adsDisplayElseWhere={adsDisplayElseWhere}
      setAdsDisplayElseWhere={setAdsDisplayElseWhere}
    />
  );
};
export default UserProfileView;
