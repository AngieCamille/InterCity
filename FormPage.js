import React, { component } from "react;"
import {
    View,
    Text,
    Stylesheet
} from "react-native"
import { 
    FormLabel,
    FormInput,
    FormValidationMessage 
} from 'react-native-elements'


class FormPage extends LogInPage {
    render() {
        return (
            <View style={Stylesheet.container}>
                <Text>Form</Text>
            </View>

            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormInput ref={input => (this.input = input)} />
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormValidationMessage>{'This field is required'}</FormValidationMessage>

            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormInput ref={input => (this.input = input)} />
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormValidationMessage>{'This field is required'}</FormValidationMessage>

            <FormLabel>Surname</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormInput ref={input => (this.input = input)} />
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormValidationMessage>{'This field is required'}</FormValidationMessage>

            <FormLabel>Date of Birth</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormInput ref={input => (this.input = input)} />
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormValidationMessage>{'This field is required'}</FormValidationMessage>

            <FormLabel>Text</FormLabel>
            <FormInput onChangeText={someFunction}/>
            <FormInput ref={input => (this.input = input)} />
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormValidationMessage>{'This field is required'}</FormValidationMessage>

        );
    }
}
export default Form;

const styles = Stylesheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
    }
});