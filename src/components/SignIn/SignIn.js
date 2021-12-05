import React from 'react';
import { 
    Container, 
    From, 
    FromButton, 
    FromContent, 
    FromH1, 
    FromInput, 
    FromLabel, 
    FromWrap, 
    Icon, 
    Text } from './SignInElements';

const SignIn = () => {
    return (
        <Container>
            <FromWrap>
                <Icon to="/">dolla</Icon>
                <FromContent>
                    <From action="#">
                        <FromH1>Sign in to your account</FromH1>
                        <FromLabel htmlFor='for'>Email</FromLabel>
                        <FromInput typ='email' placeholder="Your Email" required/>
                        <FromLabel htmlFor='for'>Password</FromLabel>
                        <FromInput typ='password' placeholder="Your Password" required/>
                        <FromButton type="submit">Continue</FromButton>
                        <Text>Forgot password</Text>
                    </From>
                </FromContent>
            </FromWrap>
        </Container>
    );
};

export default SignIn;