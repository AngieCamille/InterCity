import React, { component } from "react;"
import {
    View,
    Text,
    Stylesheet
} from "react-native"

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';

signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // If the user has cancelled the login
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // If the operation is in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // If play services not available or outdated
      } else {
        // Another error occured
      }
    }
  };

class Form extends component {
    render() {
        return (
            <View style={Stylesheet.container}>
                <Text>componentName</Text>
            </View>

        );
    }
}
export default Form;

const styles = Stylesheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});