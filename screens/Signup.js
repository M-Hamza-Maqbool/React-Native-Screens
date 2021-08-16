import React, {useState} from "react"
import { Octicons ,Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {Formik} from "formik"
import {View,TouchableOpacity} from "react-native"
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
  import DateTimePicker from '@react-native-community/datetimepicker';

const {brand,darkLight} = Colors; 
const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [date, setDate] = useState(new Date(2000,0,1));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
      };
      const showDatePicker = () =>{
          setShow(true);
      }
    return (
        <StyledContainer>
       <StatusBar style="dark"></StatusBar>
           <InnerContainer>
            
             <PageTitle>NTU XTC FSD</PageTitle>
             <SubTitle > Acount Signup</SubTitle>

             {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}

             <Formik initialValues={{email: "",dateOfBirth: "",password:""}}
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
               <MyTextInput
               label="Date of Birth"
               placeholder="YYYY - MM - DD"
               placeholderTextColor={darkLight}
               onChangeText={handleChange('dateOfBirth')}
               onBlur={handleBlur('dateOfBirth')}
               value={dob ? dob.toDateString() : ''}
               icon="calendar"
               editable={false}
               isDate={true}
               showDatePicker={showDatePicker}
             />
              <MyTextInputt
              label="Password"
              placeholder="**********"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              icon="lock"
              secureTextEntry={hidePassword}
              isPassword={true}
           //    isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
             />


             <MyTextInputt
             label="Confirm Password"
             placeholder="**********"
             placeholderTextColor={darkLight}
             onChangeText={handleChange('password')}
             onBlur={handleBlur('password')}
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
        <ButtonText >Signup</ButtonText>
        </StyledButton>

        <ExtraView>
        <ExtraText> Already Have Account </ExtraText>
        <TextLink onPress={() => navigation.navigate('Signin')}>
          <TextLinkContent>Signin</TextLinkContent>
        </TextLink>
      </ExtraView>
               </StyledFormArea>
            )}

             </Formik>
             </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
      <View>
      <LeftIcon>
         <Octicons name={icon} size={30} color={brand} />
       </LeftIcon>

         <StyledInputLabel>
         {label}
         </StyledInputLabel>
         {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
              <StyledTextInput {...props} />
            </TouchableOpacity>
          )}
          {!isDate && <StyledTextInput {...props} />}
    
        {isPassword && (<RightIcon 
            onPress={() => {
            setHidePassword(!hidePassword);
          }}>
            <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>)}
      </View>
  )
}
export default Signup;