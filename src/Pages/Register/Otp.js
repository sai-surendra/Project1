import React, { Fragment, useState } from 'react'
import { Title } from '../../components/Ft'
import {Input, Button} from 'antd'
import { withRouter } from 'react-router-dom'
import otp from '../../assets/otp.png'


function OtpConfirmation({history}) {
  
    const [loader, setLoader] = useState(false)
    const [loader2, setLoader2] = useState(false)
    const [otpi, setOtp] = useState(0)

    function confirm(){
        if(otpi == "1234"){
            setLoader(true)
            setTimeout(() =>{
                setLoader(false)
                history.push("/registraion/3");
            }, 1500)
        }
       
    }

    function previous(){
        setLoader2(true)
        setTimeout(() =>{
            setLoader2(false)
            history.push("/registraion/1");
        }, 1500)
    }

    function resend(){
        
        setTimeout(() =>{
            history.push("/registraion/2");
        }, 1000)
    }

    function handledChange(e){
        setOtp(e.target.value)
    }

    return <Fragment>
        <div className="card splid-card">
            <div className="row"><div className="col m6 s12"><Title title={`CordonOff - OTP Confirmation`}/></div></div>
            <div className="row">
            <div className="col m12 s12">
                 <div className="otp--block">  
                 <img src={otp} />
                 <br /> <br /> 
                 <p className="">We have sent you an SMS with a OPT code to your registered number for verification.</p></div>
                </div>
            </div>
         
            <div className="row">
                <div className="col m6 offset-m3 s12">
                    <Input onChange={handledChange} placeholder="Enter OTP" />
                   
                    <div style={{marginTop:'15px', marginBottom:'15px', textAlign:'center'}}>
                        <Button loading={loader2}  onClick={previous}>Previous</Button>&nbsp;
                        <Button loading={loader} type="primary" onClick={confirm}>Verify</Button>
                    </div>
                    <p className="resendOtp" onClick={resend}><span class="material-icons">replay</span> Resend OTP </p>
                </div>
            </div>
        </div>
    </Fragment>
}

export default withRouter(OtpConfirmation)