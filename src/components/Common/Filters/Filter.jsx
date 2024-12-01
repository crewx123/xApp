import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Styles } from './style/FilterStyle';
import FilterModal from '../../Modal/Modal';
import ShowFilterData from './showFilterData/showFilterData';

const Filter = ({ isFilterModalVisible, setFilterModalVisible }) => {
    const [searchedValue, setSearchedValue] = useState('');
    const [filterList, setFilterList] = useState([
        {
            "Sort By":
                ['Featured', 'Best Selling', 'Newest', 'Price: Low-High', 'Price: High-Low']
        },
        {
            "Gender": ['Men']
        },
        {
            "Colors": ['black', 'red', 'blue', 'green', 'grey']
        },
        {
            "Size": ['XXS', 'S', 'M', 'L', 'XL', 'XLL']
        },
        {
            "Fit": ['Inseam', 'Relaxed']
        },
        {
            "Product Type": ['Bottom', 'Jogger', 'Short', 'Stringer', 'Top']
        }
    ]);
    return (
        <FilterModal
            isDrawerVisible={isFilterModalVisible}
            setIsDrawerVisible={setFilterModalVisible}
        >
            <View style={Styles.filterContainer}>
                <TextInput
                    value={searchedValue}
                    onChange={setSearchedValue}
                    placeholder='Search Products in this page...'
                    style={Styles.filterSearchBar}
                    placeholderTextColor='#fff'
                />
                <ScrollView
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >

                    {
                        filterList.map((data, index) => (
                            <View>
                                {
                                    Object.entries(data).map(([key, value], index) => (
                                        <View style={{ flexDirection: 'column', gap: 6 }} key={index}>
                                            <View>
                                                <Text>{key}</Text>
                                            </View>
                                            <ShowFilterData
                                                filterData={value}
                                                horizontal={(key === "Colors" || key === "Size") ? true : false}
                                                text={key === "Colors" ? false : true}
                                            />
                                        </View>
                                    ))
                                }
                            </View>
                        ))
                    }

                </ScrollView>
            </View>
        </FilterModal>
    )
}

export default Filter;