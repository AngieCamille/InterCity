/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { 
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>

            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>

            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Log in screen</Text>
              <Text style={styles.sectionDescription}>
              </Text>
            </View>
            <View style={styles.sectionContainer}>

            </View>
            <View style={styles.sectionContainer}>

            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

class LogInPage extends Component {
 
  static navigationOptions =
   {
      title: 'LogInPage',
   };
   
   FunctionToOpenFormPage = () =>
   {
      this.props.navigation.navigate('FormPage');
      
   }
   
   render()
   {
      return(
         <View style = { styles.MainContainer }>
   
           <View style={{marginBottom: 20}}>
   
            <Text style = { styles.TextStyle }> This is the Log In Page </Text>
   
           </View>
   
            <Button onPress = { this.FunctionToOpenFormPage } title = 'Click Here To Open Form Page'/>
          
         </View>
      );
   }
  }
   
  class FormPage extends LogInPage
  {
   static navigationOptions =
   {
      title: 'FormPage',
   };
   
   render()
   {
      return(
         <View style = { styles.MainContainer }>
   
            <Text style = { styles.TextStyle }> This is Form Page </Text>
   
         </View>
      );
   }
  }

  export default Project = StackNavigator(
    {
     First: { screen: LogInPage },
     
     Second: { screen: FormPage }
    });

const styles = StyleSheet.create({
  MainContainer: {
        justifyContent: 'center',
        flex:1,
        margin: 10
      
     },
     
     TextStyle: {
        fontSize: 23,
        textAlign: 'center',
        color: '#000',
     },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
