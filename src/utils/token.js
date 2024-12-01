import EncryptedStorage from 'react-native-encrypted-storage';

// Store the token
export function storeToken(key, value) {
    EncryptedStorage.setItem(key, value)
        .then(() => {
            return true;
        })
        .catch((error) => {
            return false;
        });
}


export async function checkToken(navigation) {
    const token = await EncryptedStorage.getItem("token");
    if (token) {
        console.log(token);
        navigation.replace("Dashboard"); // Go to Home Screen
    } else {
        // navigation.replace("Login Welcome"); // Go to Login Screen
        console.log('token not found');
    }
}

export async function removeToken() {
    try {
        await EncryptedStorage.removeItem('token');
        console.log('token removed successfully');
    } catch (error) {
        console.log('something went wrong');
    }

}

