// // // localhost:8000/product/showSubCategories
import React from 'react';
import { useRef, useEffect } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    Dimensions,
    Animated,
    PanResponder,
    KeyboardAvoidingView
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Dashboard = ({ isDrawerVisible, setIsDrawerVisible, children }) => {

    const slideAnim = useRef(new Animated.Value(300)).current; // Animation value for sliding
    const opacityAnim = slideAnim.interpolate({
        inputRange: [0, 300],
        outputRange: [1, 0], // Opacity decreases as slideAnim increases
        extrapolate: 'clamp',
    });

    // Function to open the modal
    useEffect(() => {
        const openModal = () => {
            // setIsDrawerVisible(true);
            Animated.timing(slideAnim, {
                toValue: 0, // Bring modal up to visible
                duration: 300,
                useNativeDriver: true,
            }).start();
        };
        if (isDrawerVisible) {
            openModal();
        }
    }, [isDrawerVisible]);

    // Function to close the modal with slide-down animation
    const closeModal = () => {
        Animated.timing(slideAnim, {
            toValue: 300, // Slide down out of view
            duration: 300,
            useNativeDriver: true,
        }).start(() => setIsDrawerVisible(false));
    };

    // PanResponder for slide-down gesture
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dy > 0, // Detect downward swipe
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    slideAnim.setValue(gestureState.dy); // Move modal down as finger moves down
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 100) {
                    closeModal(); // Close if swiped down enough
                } else {
                    // Reset if swipe was too short
                    Animated.spring(slideAnim, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={isDrawerVisible}
                    animationType="none"
                    onRequestClose={closeModal}
                    KeyboardAvoidingView={true}
                >
                    <View style={styles.modalOverlay}>
                        <Animated.View
                            style={[
                                styles.modalContainer,
                                { transform: [{ translateY: slideAnim }], opacity: opacityAnim }, // Attach translation animation
                            ]}
                            {...panResponder.panHandlers}
                        >
                            <KeyboardAvoidingView
                                style={{ flex: 1 }}
                                behavior='height'
                                keyboardVerticalOffset={0}
                            >
                                {children}
                            </KeyboardAvoidingView>
                        </Animated.View>
                        {/* </PanGestureHandler> */}
                    </View>
                </Modal>
            </View>
        </GestureHandlerRootView>
    );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        width: '100%',
        height: height * 0.75,
        maxHeight: height * 0.75,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    listContent: {
        padding: 10,
    },
    productItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    productText: {
        fontSize: 16,
    },
});

export default Dashboard;
