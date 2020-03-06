import React, { component } from "react;"
import {
    View,
    Text,
    Stylesheet
} from "react-native"
import { 
    LoginButton,
    AccessToken 
} from 'react-native-fbsdk';

export default class FacebookLogin extends Component {
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
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