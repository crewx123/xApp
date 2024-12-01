import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from "../style/FilterStyle";

const ShowFilterData = ({ filterData, horizontal = true, text = true }) => {
    return (
        <View style={Styles.mainContainer}>
            <View style={{ flexDirection: horizontal ? 'row' : 'column', justifyContent: 'flex-start', gap: 4, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                {
                    filterData.map((data, index) => (
                        <>
                            {text ?
                                <View key={index}>
                                    <Text>{data}</Text>
                                </View> :
                                <View style={{ width: 50, height: 50, backgroundColor: `${data}`, borderWidth: 1, borderColor: '#fff' }}>
                                </View>
                            }
                        </>
                    ))
                }
            </View>
        </View>
    )
}

export default ShowFilterData;