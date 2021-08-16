import React, {useState} from "react"
import { Octicons ,Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {Formik} from "formik"
import {View} from "react-native"
import {
    StyledContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledInputLabel,
    StyledFormArea,
    StyledButton,
    StyledTextInput,
    LeftIcon,
    RightIcon,
    InnerContainer,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors,
  } from './../components/styles';
const {brand,darkLight} = Colors; 
const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
       <StatusBar style="dark"></StatusBar>
           <InnerContainer>
            <PageLogo source={require('../assets/img/National_Textile_University_Logo.png')}  />
             <PageTitle>XTC</PageTitle>
             <SubTitle > Acount Login</SubTitle>
             <Formik initialValues={{email: "",password:""}}
                onSubmit={(values) => {
                 console.log(values)
                }}>
                
                {({handleChange ,handleBlur,handleSubmit,values })=>(
                <StyledFormArea>
                <MyTextInputt
                label="Email Address"
                placeholder="hamza@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                icon="mail"
               />
               <MyTextInputt
               label="Password"
               placeholder="**********"
               placeholderTextColor={darkLight}
               onChangeText={handleChange('password')}
               onBlur={handleBlur('password]')}
               value={values.password}
               icon="lock"
               secureTextEntry={hidePassword}
               isPassword={true}
            //    isPassword={true}
               hidePassword={hidePassword}
               setHidePassword={setHidePassword}
              />
              <MsgBox></MsgBox>
        <StyledButton onPress={handleSubmit}>
        <ButtonText >Login</ButtonText>
        </StyledButton>

        <ExtraView>
        <ExtraText>Don't have an account already? </ExtraText>
        <TextLink onPress={() => navigation.navigate('Signup')}>
          <TextLinkContent>Signup</TextLinkContent>
        </TextLink>
      </ExtraView>
               </StyledFormArea>
            )}

             </Formik>
             </InnerContainer>
        </StyledContainer>
    )
}

MyTextInputt = ({label,icon, isPassword, hidePassword, setHidePassword,...probes}) => {
  return (
      <View>
      <LeftIcon>
         <Octicons name={icon} size={30} color={brand} />
       </LeftIcon>

         <StyledInputLabel>
         {label}
         </StyledInputLabel>
         <StyledTextInput {...probes} />
        {isPassword && (<RightIcon 
            onPress={() => {
            setHidePassword(!hidePassword);
          }}>
            <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>)}
      </View>
  )
}
export default Login;