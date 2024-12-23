/* eslint-disable react/react-in-jsx-scope */
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { productImg } from '../../theme/Images';
import { Styles } from './style/ProductAdsCardsStyle';

const ProductAdCard = ({ adsHeadingName, tredingProductList, onPress = null }) => {
    console.log("Product List", tredingProductList);
    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.headingContainer}>
                <Text style={Styles.headingText}>{adsHeadingName}</Text>
            </View>
            <ScrollView style={Styles.allSubCategoryContainer} horizontal={true} showsHorizontalScrollIndicator={false}>

                {tredingProductList.length !== 0 && (tredingProductList.data).map(({ _id, images, name }) => (<View style={Styles.adsCardContainer} key={_id}>
                    <Image source={{ uri: `${tredingProductList.root}/${images}` }} style={Styles.adImage} resizeMode="cover" />
                    <View style={Styles.eachSubCategoryInfoContainer}>
                        <View style={Styles.eachSubCategoryNameContainer}>
                            <Text style={Styles.subCatergoryName}>{name}</Text>
                        </View>
                        <TouchableOpacity style={Styles.btnContainer} onPress={onPress}>
                            <Text style={Styles.btnName}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>))}
            </ScrollView>
        </View>

    );
};

export default ProductAdCard;

// http://localhost:8000/product/showSubSubCategory
