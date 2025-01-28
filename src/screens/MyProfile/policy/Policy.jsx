import React from "react";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Styles } from "./style/policyStyle";

const PrivcyPolicy = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const newDate = () => {
        const currentDate = new Date();
        return (months[currentDate.getMonth()]) + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
    }
    return (
        <SafeAreaView style={Styles.myPolicyMainContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={Styles.policyHeadlineContainer}>
                    <View>
                        <Text style={{ ...Styles.commonTextStyle, fontSize: 16, fontWeight: "100" }}>Effective Date: {newDate()}</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.commonTextStyle, fontSize: 15 }}>
                            At <Text style={{ fontStyle: 'italic' }}>XPRICE Private Limited</Text>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our e-commerce website, shop for products, or interact with our services. By using our website, you agree to the practices described in this policy.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PrivcyPolicy;