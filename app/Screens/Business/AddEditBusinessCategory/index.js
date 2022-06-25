import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AddEditBusinessCategory from './components/AddEditBusinessCategory';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    apiCall, setDefaultHeader
} from '../../../Utils/httpClient';
import ENDPOINTS from '../../../Utils/apiEndPoints';
import Loader from '../../../Utils/Loader';
import Error from '../../../Components/Modal/error';
import Success from '../../../Components/Modal/success';
import { _ } from "lodash";

const AddCategory = ({ navigation, route }) => {
    const category = route.params.businessCategor
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false)
    const [businessCategory, setBusinessCategory] = useState(false)
    const [subCategoryList, setServiceList] = useState([])
    const [ServiceListForSearch, setServiceListForSearch] = useState([])
    const [categoryName, setCategoryName] = useState('')
    const [BusinessCategoryList, setBusinessCategoryList] = useState(route.params.businessCategory)
    const [BusiCategoryList, setBusiCategoryList] = useState(route.params.businessCategory)
    const [ShowSelectCategory, setShowSelectCategory] = useState()

    useEffect(() => {
        handleServiceList()
    }, [])



    const onPressSave = async () => {
        const valid = validationFrom();
        setBusinessCategory(false)
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    'business_category': BusiCategoryList
                }
                const { data } = await apiCall
                    ('POST', ENDPOINTS.BUSINESS_CATEGORY_UPDATE, params);
                if (data.status === 200) {
                    setVisible(false);
                    setVisibleSuccess(true)
                    setSuccessMessage('Business category updated successfully')
                } else {
                    setVisible(false);
                    setErrorMessage(data.message);
                    setVisibleErr(true);
                };
            } catch (error) {
                setErrorMessage(error);
                setVisibleErr(true);
                setVisible(false);
            };
        }
    }


    function validationFrom() {
        if (BusiCategoryList == "") {
            setErrorMessage('Please select category');
            setVisibleErr(true)
            return false;
        }
        return true;
    }

    const CategorySearch = (search) => {
        if (search) {
            let data = subCategoryList;
            var searchText = search.trim().toLowerCase();
            let dataArray2 = data.filter(l => {
                return l.category_name.toLowerCase().match(searchText);
            });
            setServiceList(dataArray2)
        } else {
            setServiceList(ServiceListForSearch)
        }
    }
    const handleServiceList = async () => {
        setVisible(true)
        const { data } = await apiCall
            ('POST', ENDPOINTS.GET_BUSINESS_CATEGORY_DETAILS);
        if (data.status === 200) {
            setServiceList(data.data);
            setShowSelectCategory(data.data);
            setServiceListForSearch(data.data);
            serviceSelect(data.data)
            setVisible(false);
        } else {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        }
    }
    const serviceSelect = (data) => {
        const arrayData = [...data]
        if (BusinessCategoryList) {
            if (BusinessCategoryList != null || BusinessCategoryList.length > 0) {
                data.map((item, i) => {
                    BusinessCategoryList.map((selectItem, index) => {
                        if (item.id == selectItem.category_id) {
                            arrayData[i].check = true
                        }
                    })
                })
            }
        }
    }

    const onPressBusinessCategories = () => {
        setBusinessCategory(!businessCategory)
    }



    const onClickService = (categoriesName) => {
        const index = ServiceListForSearch.findIndex(obj => obj.category_name === categoriesName);
        if (BusiCategoryList.length < 3) {
            let subCategoryListData = [...ShowSelectCategory];
            subCategoryListData[index].check = !subCategoryListData[index].check;
            const data = _.filter(subCategoryListData, { check: true })
            const selectPartnerCaste = []
            subCategoryListData.map((item) => {
                item.check == true ?
                    selectPartnerCaste.push(item)
                    :
                    null
            })
            setBusiCategoryList(selectPartnerCaste)
            setShowSelectCategory(subCategoryListData)
        } else {
            setErrorMessage('You can select upto three categories');
            setVisibleErr(true);
        }
    }
    const RemoveService = (index) => {
        let subCategoryListData = [...ShowSelectCategory];
        subCategoryListData[index].check = !subCategoryListData[index].check;
        const data = _.filter(subCategoryListData, { check: true })
        const selectPartnerCaste = []
        subCategoryListData.map((item) => {
            item.check == true ?
                selectPartnerCaste.push(item)
                :
                null
        })
        setBusiCategoryList(selectPartnerCaste)
        setShowSelectCategory(subCategoryListData)
    }





    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <AddEditBusinessCategory
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                onPressSave={onPressSave}
                businessCategory={businessCategory}
                onPressBusinessCategories={onPressBusinessCategories}
                subCategoryList={subCategoryList}
                onClickService={onClickService}
                RemoveService={RemoveService}
                CategorySearch={CategorySearch}
                BusiCategoryList={BusiCategoryList}
                ShowSelectCategory={ShowSelectCategory}

            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => ('Home', setVisibleSuccess(false))}
            />
        </View>
    )
}
export default AddCategory;