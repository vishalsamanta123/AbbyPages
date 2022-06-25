import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import ProductDetailsScreen from './components/ProductDetailsScreen';
import CommonStyles from '../../Utils/CommonStyles';
import _ from 'lodash';
import { apiCall } from '../../Utils/httpClient';
import ENDPOINTS from '../../Utils/apiEndPoints';
import Loader from '../../Utils/Loader';
import Success from '../../Components/Modal/success';
import Error from '../../Components/Modal/error';
import { ShoppingCartContext } from '../../Utils/UserContext';
const ProductDetails = ({ navigation, route }) => {
    const [shoppingCartData, setShoppingCartData] = useContext(ShoppingCartContext);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);

    const [reviewModal, setReviewModal] = useState(false);
    const [businessReviewRating, setBusinessReviewRating] = useState(3);
    const [reviewData, setReviewData] = useState({
        description: "",
        title: "",
        business_rating: "",
        // business_type: 2,
        business_id: '',
    });

    const [productDetail, setProductDetail] = useState('');
    useEffect(() => {
        if (route.params) {
            const { detail } = route.params
            setProductDetail(detail);//state
            handleProductDetail(detail);//function
        };
    }, []);

    const handleProductDetail = async (detail) => {
        setVisible(true);
        try {
            const params = {
                product_id: detail.product_id
            }
            const { data } = await apiCall("POST", ENDPOINTS.GET_PRODUCT_DETAIL, params)
            if (data.status === 200) {
                setVisible(false);
                setProductDetail(data.data);
            } else {
                setErrorMessage(data.message);
                setVisibleErr(true);
                setVisible(false);
            }
        } catch (error) {
            setErrorMessage(data.message);
            setVisibleErr(true);
            setVisible(false);
        }
    };
    const validationForReviewSubmit = () => {
        if (reviewData.description == '') {
            setErrorMessage('Please Enter Description');
            setVisibleErr(true);
            return false
        } if (reviewData.title == '') {
            setErrorMessage('Please Enter Subject');
            setVisibleErr(true);
            return false
        } if (businessReviewRating == '') {
            setErrorMessage('Please Select Stars');
            setVisibleErr(true);
            return false
        } return true;
    }
    const onSubmitReviewData = async () => {
        const valid = validationForReviewSubmit();
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    business_id: productDetail.business_id,
                    business_type: productDetail.business_type,
                    product_id: productDetail.product_id,
                    title: reviewData.title,
                    description: reviewData.description,
                    product_rating: businessReviewRating,
                }
                const { data } = await apiCall('POST', ENDPOINTS.PRODUCT_REVIEW, params)
                if (data.status == 200) {
                    handleProductDetail(productDetail);
                    setReviewData({
                        description: "", title: ""
                    })
                    setReviewModal(false);
                    setVisible(false);
                } else {
                    setErrorMessage(data.message);
                    setVisibleErr(true);
                    setVisible(false);
                }
            } catch (error) {
                setErrorMessage(error);
                setVisibleErr(true);
                setVisible(false)
            }
        };
    };
    const removeFromCart = (item) => {
        if (shoppingCartData.length > 0) {
            var getIndex = _.findIndex(shoppingCartData, { product_id: item.product_id })
            if (getIndex >= 0) {
                if (shoppingCartData[getIndex].quantity > 0) {
                    shoppingCartData[getIndex].quantity = shoppingCartData[getIndex].quantity - 1;
                    shoppingCartData[getIndex].total_product_price = shoppingCartData[getIndex].total_product_price - shoppingCartData[getIndex].price;
                    setShoppingCartData(shoppingCartData);
                } if (shoppingCartData[getIndex].quantity === 0) {
                    shoppingCartData.splice(getIndex, 1);
                    setShoppingCartData(shoppingCartData);
                    shoppingCartData.length == 0
                };
            };
        };
    };
    const onPressAddProduct = (item, value) => {
        addProductOnCart(item, value)
    };
    const getqty = (item) => {
        var getIndex = _.findIndex(shoppingCartData, { product_id: item.product_id })
        if (getIndex >= 0) {
            return shoppingCartData[getIndex].quantity;
        }
    };
    const addProductOnCart = async (item, value) => {
        try {
            const cartProduct = {
                product_id: item.product_id,
                product_name: item.product_name,
                price: item.final_price,
                quantity: value,
                total_product_price: item.final_price * value,
                product_discount: item.price - item.final_price,
                product_weight: item.product_weight,
                product_size: item.product_size,
                product_color: item.product_color,
                product_brand: item.company_brand,
                product_description: item.description,
                product_image: item.product_image[0].product_image
            };
            if (shoppingCartData.length > 0) {
                var getIndex = _.findIndex(shoppingCartData, { product_id: item.product_id })
                if (getIndex >= 0) {
                    shoppingCartData[getIndex].quantity = shoppingCartData[getIndex].quantity + 1;
                    shoppingCartData[getIndex].total_product_price = shoppingCartData[getIndex].price * value;
                    setShoppingCartData(shoppingCartData);
                } else {
                    setShoppingCartData(curr => [...curr, cartProduct]);
                }
            } else {
                setShoppingCartData(curr => [...curr, cartProduct]);
                // await AsyncStorage.setItem('localCartData', JSON.stringify(shoppingCartData))
            }
        } catch (e) {
            setErrorMessage(e);
            setVisibleErr(true);
        };
    };
    const setaddbtn = _.filter(shoppingCartData, { product_id: productDetail.product_id });
    const addButton = setaddbtn.length > 0 ? true : false;
    return (
        <View style={CommonStyles.container}>
            {visible && <Loader state={visible} />}
            <ProductDetailsScreen
                shoppingCartData={shoppingCartData}
                addButton={addButton}
                addProductOnCart={addProductOnCart}
                onPressAddProduct={onPressAddProduct}
                removeFromCart={removeFromCart}
                getqty={getqty}

                productDetail={productDetail}
                onPressCart={() => { shoppingCartData.length !== 0 && navigation.navigate('ShoppingCart') }}

                onSubmitReviewData={onSubmitReviewData}
                businessReviewRating={businessReviewRating}
                setBusinessReviewRating={setBusinessReviewRating}
                reviewData={reviewData}
                setReviewData={setReviewData}
                reviewModal={reviewModal}
                setReviewModal={setReviewModal}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => setVisibleSuccess(false)}
            />
        </View>
    );
};
export default ProductDetails;