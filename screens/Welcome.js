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
    WelcomeContainer
  } from './../components/styles';
const {brand,darkLight} = Colors; 
const Welcome = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        
           <InnerContainer>
           
             <WelcomeContainer>

             <PageLogo source={require('../assets/img/National_Textile_University_Logo.png')}  />
             <PageTitle>NTU</PageTitle>
             <SubTitle > Welcome Buddy!</SubTitle>
             <Line ></Line>

           <StyledFormArea>
        <StyledButton  onPress={() => navigation.navigate('Login')} >
        <ButtonText > Login </ButtonText>

        </StyledButton>
        
        <StyledButton  onPress={() => navigation.navigate('Signup')} >

        <ButtonText > Signup </ButtonText>

        </StyledButton>

        <ExtraView>
       
      </ExtraView>
               </StyledFormArea>
            </WelcomeContainer>

             </InnerContainer>
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
export default Welcome;