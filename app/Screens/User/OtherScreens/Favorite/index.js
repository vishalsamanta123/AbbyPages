import React, { useState } from "react";
import FavoriteView from "./components/FavoriteView";

const Favorite = ({ navigation, route }) => {
  const [selected_modal, setSelected_modal] = useState(3);
  return (
    <FavoriteView
      selected_modal={selected_modal}
      setSelected_modal={setSelected_modal}
    />
  );
};

export default Favorite;
