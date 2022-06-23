import React, { useContext } from 'react';
import BookmarkScreen from './components/BookmarkScreen';
import { UserContext } from "../../Utils/UserContext";

const BookmarkView = () => {
    const [userData, setUserData] = useContext(UserContext);
    return ( <BookmarkScreen userData={userData} /> )
}
export default BookmarkView;