import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style/NavBarStyle';

const NavBar = ({ BackgroundColor, setIsMenuDrawerVisible = null, setIsSearchBarDrawerVisible = null, setIsAddToCartDrawerVisible = null, handleOnPressMyProfile = null }) => {

    const openMenuDrawer = () => {
        if (setIsMenuDrawerVisible !== null)
            setIsMenuDrawerVisible(true);
        else return null;
    }

    const openSearchBarDrawer = () => {
        if (setIsSearchBarDrawerVisible !== null) {
            setIsSearchBarDrawerVisible(true);
        }
        else return null;
    }

    const openAddToCart = () => {
        if (setIsAddToCartDrawerVisible !== null)
            setIsAddToCartDrawerVisible(true)
        else return null
    }

    return (
        <View style={styles.container}>
            <View style={{ ...styles.menuBarContainer, backgroundColor: BackgroundColor }}>
                <View style={styles.logoNameContainer}>
                    <Text style={styles.title}>X-PRICE</Text>
                </View>
                <View style={styles.menuIconsContainer}>
                    <TouchableOpacity onPress={handleOnPressMyProfile}>
                        <Icon name="person-outline" size={20} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openSearchBarDrawer}>
                        <Icon name="search-outline" size={20} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative' }} onPress={openAddToCart} >
                        <Icon name="bag-outline" size={20} color="#fff" />
                        <View style={{ position: 'absolute', width: 14.2, height: 14.2, borderRadius: 50, backgroundColor: 'red', bottom: -2, right: -1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 8.5 }}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openMenuDrawer} style={styles.hamburgerButton}>
                        <Icon name="menu-outline" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NavBar;