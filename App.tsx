import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function MyComponent() {
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const renderWebView = (url) => {
    setCurrentUrl(url);
    setWebViewVisible(true);
  };

  const closeWebView = () => {
    setWebViewVisible(false);
  };

  return (
    <View style={styles.container}>
      {webViewVisible ? (
        <>
          <Button
            title="Close WebView"
            onPress={closeWebView}
          />

<WebView
            source={{
              uri: currentUrl,
            }}
          />
        </>
      ) : (
        <>
        <View style={styles.container}>
          <View style={styles.webview}>
          <Text style={{fontSize:25,fontWeight:'700', textAlign:'center',color:'red'}}>WebView in React Native</Text>
          </View>
          <View style={{marginTop:30, }}>
          <TouchableOpacity  style={styles.Btn1}  onPress={() => renderWebView('https://firebase.google.com/?gad=1&gclid=CjwKCAjwnOipBhBQEiwACyGLujUMn4k_hGzBxqrRt6hahrrwp5FJpvW6hNzF2DLQSN5I6xv9seBKLBoCbYEQAvD_BwE&gclsrc=aw.ds')}>
         <Text style={{textAlign:'center'}}>Open First WebViewLink</Text>
          
          </TouchableOpacity>
          <View style={{marginTop:10}}>
          <TouchableOpacity style={styles.Btn2} onPress={() => renderWebView('https://reactnative.dev/docs/flatlist')}>
            <Text style={{textAlign:'center'}}>Open Second WebViewLink</Text>
         
          </TouchableOpacity>
          </View>
          </View>
          </View>
        </>
              )}
              </View>
            );
          }
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor:'white',padding:15
            },
            Btn1:{
              paddingVertical:10, backgroundColor:'blue',paddingHorizontal:20,
              borderRadius:15
            },
            Btn2:{
              paddingVertical:10, backgroundColor:'green',paddingHorizontal:20,
              borderRadius:15
            },
            webview:{
justifyContent:'center',
//backgroundColor:'red',
marginTop:30,
alignSelf:'center'
            }
          });
          
          export default MyComponent;
          