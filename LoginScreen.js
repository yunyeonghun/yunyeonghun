const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
<TextInput
          style={styles.textFormTop}
          placeholder={'아이디'}
          onChangeText={(userId) => setUserId(userId)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
         /> 

        fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            body: formBody,
            headers: {
              //Header Defination
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((responseJson) => {
              //Hide Loader
              setLoading(false);
              console.log(responseJson);
              // If server response message same as Data Matched
              if (responseJson.status === 'success') {
                AsyncStorage.setItem('user_id', responseJson.data.stu_id);
                console.log(responseJson.data.stu_id);
                navigation.replace('DrawerNavigationRoutes');
              } else {
                setErrortext('아이디와 비밀번호를 다시 확인해주세요');
                console.log('Please check your id or password');
              }
            })
            .catch((error) => {
              //Hide Loader
              setLoading(false);
              console.error(error);
            });
            <Image
            source={require('../src/Pet-logo.png')}
            style={{
              width: '55%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          /> 
          const styles = StyleSheet.create({
            mainBody: {
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#f8f8d9',
              alignContent: 'center',
            },
          
            buttonStyle: {
              backgroundColor: '#50611c',
              borderWidth: 0,
              color: '#FFFFFF',
              borderColor: '#50611c',
              height: 40,
              alignItems: 'center',
              borderRadius: 30,
              marginLeft: 35,
              marginRight: 35,
              marginTop: 20,
              marginBottom: 25,
            },
            buttonTextStyle: {
              color: '#647a23',
              paddingVertical: 10,
              fontSize: 16,
            },
            inputStyle: {
              flex: 1,
              color: 'Dark green',
              paddingLeft: 15,
              paddingRight: 15,
              borderWidth: 1,
              borderRadius: 30,
              borderColor: '#647a23',
            },
            registerTextStyle: {
              color: '#647a23',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 14,
              alignSelf: 'center',
              padding: 10,
            },
            errorTextStyle: {
              color: 'red',
              textAlign: 'center',
              fontSize: 14,
            },
          });
          
           
        
            
