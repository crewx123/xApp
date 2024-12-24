
/* eslint-disable react/react-in-jsx-scope */
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
// import { productImg } from '../../theme/Images';
import LoaderTemplate from '../Common/loaderTemplate';
import { Styles } from './style/ProductAdsCardsStyle';
const { width } = Dimensions.get('window');

const ProductAdCard = ({ adsHeadingName, tredingProductList = [], onPress = null, isLoading }) => {
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.headingContainer}>
                <Text style={Styles.headingText}>{adsHeadingName}</Text>
            </View>
            <ScrollView style={Styles.allSubCategoryContainer} horizontal={true} showsHorizontalScrollIndicator={false}>

                {
                    isLoading ? ([1, 2, 3, 4, 5].map((_, index) => (
                        <View key={index} style={Styles.adsCardContainer}>
                            <LoaderTemplate
                                colorList={['rgb(0, 0, 0)', 'rgb(50, 50, 50)']}
                                boxWidth={width - 130}
                                boxHeight={360}
                                loaderTitle="XPRICE"
                                loaderTitleColor="#fff"
                                loaderTitleSize={18.5}
                            />
                        </View>
                    ))) : (tredingProductList.data)?.map(({ _id, images, name }) => (<View style={Styles.adsCardContainer} key={_id}>
                        <Image source={{ uri: `${tredingProductList.root}/${images}` }} style={Styles.adImage} resizeMode="cover" />
                        <View style={Styles.eachSubCategoryInfoContainer}>
                            <View style={Styles.eachSubCategoryNameContainer}>
                                <Text style={Styles.subCatergoryName}>{name}</Text>
                            </View>
                            <TouchableOpacity style={Styles.btnContainer} onPress={onPress}>
                                <Text style={Styles.btnName}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>

    );
};

export default ProductAdCard;

// http://localhost:8000/product/showSubSubCategory
