import React,{useState} from "react";
import './register.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios'





const Register = () => {

    const [inputValue,setInputValue] = useState("")
    const [inpConfirmValue,setinpConfirmValue] = useState("")
    const [pass,setPass] = useState('')
    const [checkValues,setCheckValues] = useState(null)
    const [err,setErr] = useState({
        error:null,
        errorText:''
    })

const  inputHandler = (e) =>{
        setInputValue(e.target.value)
}

const  inputConfirm = (e) =>{
        setinpConfirmValue(e.target.value)
}
const passHandler = (e) =>{
    setPass(e.target.value)
}
const submitter = async(e) => {
    if(inputValue === inpConfirmValue){
            setCheckValues(true)
            const auth = {
                email:inputValue,
                password:pass,
                returnSecureToken:true
            } 
        try {
            await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbnflOu7VL-upWMLKL7EW6A848Rh-HENM',auth)
            setErr({
                error:false,
                errorText:''
            })
          
        } catch (err) {
                const message = err.response.data.error.message
               setErr({
                    error:true,
                    errorText:message
               })
        }
     }
}

return (
       
            <MDBContainer className="container-fluid">
            <MDBRow >
                <MDBCol md="6" className="container-fluid">
                <form className="regform" >
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                        <MDBInput 
                                label="Your name" 
                                icon="user" 
                                group type="text" 
                                validate error="wrong"
                                success="right" 
                                className="white-text"/>
                        <MDBInput 
                                label="Your email" 
                                icon="envelope" 
                                group type="email" 
                                validate error="wrong"
                                success="right"
                                className="white-text"
                                onChange= {inputHandler}
                                />
                    <MDBInput 
                                label="Confirm your email" 
                                icon="exclamation-triangle" 
                                group type="text" 
                                validate
                                error="wrong" 
                                success="right" 
                                className="white-text"
                                onChange= {inputConfirm}/>
                    <MDBInput 
                                label="Your password" 
                                icon="lock" 
                                group type="password" 
                                validate 
                                className="white-text"
                                onChange= {passHandler}
                                />
                    </div>
                    <div className="text-center">
                        <MDBBtn color="primary" onClick={submitter}  >Register</MDBBtn>
                        <hr/>
                            {err.error===true?<span className="text-danger">{err.errorText}</span>:err.error===false?<span className="text-success">success</span>  :null}
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
     
);
};

export default Register