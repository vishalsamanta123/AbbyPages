import React, { useContext, useEffect, useState } from 'react';
import BookmarkScreen from './components/BookmarkScreen';
import { UserContext } from "../../Utils/UserContext";
import { apiCall } from "../../Utils/httpClient";
import ENDPOINTS from "../../Utils/apiEndPoints";

const BookmarkView = () => {
    const [userData, setUserData] = useContext(UserContext);
    const [bookmarkData,setBookmarkData] = useState('');
    useEffect(() => {
        // getUserProfile();
    }, []);

    /*  const getUserProfile = async () => {
        try {
            const response = await apiCall("POST", ENDPOINTS.GET_USER_PROFILE)
            if (response.status === 200) {
                setBookmarkData(response.data.data)
            } else {
                console.log('else');
            }
        } catch (error) {
            console.log('error', error);
        }
    }*/
    return (
        <BookmarkScreen
            userData={userData}
            bookmarkData={bookmarkData}
        />
    );
}
export default BookmarkView;