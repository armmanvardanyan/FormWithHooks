import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBBtnGroup } from 'mdbreact';
import './login.css'
import axios from "axios";




const Login = () =>{
    
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [err,setErr] = useState({
        err:null,
        message:''
    })

    
        const signIn = async() =>{
            const auth = {
                email:email,
                password:pass,
                returnSecureToken:true
            }
           
          try {
            await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbnflOu7VL-upWMLKL7EW6A848Rh-HENM',auth)
            setErr({
                err:false,
                message:''
            })

        } catch (error) {
            const message = error.response.data.error.message
            setErr({
                err:true,
                message:message
            })
          }

        }
        const recoverPass = async () =>{
            try {
                const auth = {
                    requestType:'PASSWORD_RESET',
                    email:email
                }
                  await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAbnflOu7VL-upWMLKL7EW6A848Rh-HENM',auth)
                
            } catch (error) {
                 
            }
             
        }
    return(
            <MDBContainer  className="container-fluid">
            <MDBRow>
                <MDBCol md="6" className="container-fluid">
                <form className="loginform">
                    <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                            <MDBInput 
                                label="Type your email" 
                                icon="envelope" 
                                group type="email" 
                                validate error="wrong"
                                success="right" 
                                className="white-text"
                                onChange = {(e)=>setEmail(e.target.value)}
                                />
                            <MDBInput 
                                label="Type your password"
                                icon="lock"
                                group type="password"
                                validate 
                                className="white-text" 
                                onChange = {e=>setPass(e.target.value)}
                                />
                        </div>
                        <div className="text-center">
                                <MDBBtnGroup  >
                                    <MDBBtn size="md" color="primary" onClick = {signIn} >Login</MDBBtn>
                                    <MDBBtn size="md"   color="grey"  onClick={recoverPass}>Forgot password?</MDBBtn>
                                </MDBBtnGroup>
                            <hr/>
                                {
                                err.err ===false?
                                <small className = 'text-success'>You have logged in succesfully</small>:
                                err.err===true?
                                <small className = 'text-danger'>{err.message}</small>:
                                null
                                }      
                        </div>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
};

export default Login;
