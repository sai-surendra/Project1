import React, { Fragment, useState } from 'react'
import { Title } from '../../components/Ft'
import { Input, Checkbox, Button, Alert, InputNumber } from 'antd'
import { withRouter } from 'react-router-dom'
import {API} from '../../API'

function TravellerRegister({ history,  getResult}) {

    const [loader, setLoader] = useState(false)
    const [state, seState] = useState({
        "AadharNumber": "",
        "CustomerID": 0,
        "FirstName": "",
        "IsHomeQuarantine": 0,
        "IsMobileNFCEnabled": '',
        "IsMobileSmartPhone": '',
        "MobileNo1": "",
        "TravelHistoryID": 0,
        "VialotionID": 0
    })

    const [message, setMessage] = useState({
        message: '',
        type: ''
    })

   async function registerUser() {
        if (state.AadharNumber !== "" &&
            state.MobileNo1 !== "" &&
            (state.IsMobileSmartPhone !== "" || state.IsMobileNFCEnabled !== "") && state.FirstName !== "") {
            setLoader(true)
            let sentData = state
            const res = await API('post', sentData, 'Customer/CreateCustomer')
            if(res.data !==""){
                setLoader(false)
                let data = JSON.parse(res.data)
                getResult(data)
                if(data.CustomerID > 0){
                    setMessage({message: 'Successfully registered.', type: 'success'})
                    history.push("/registraion/2");
                }else if(data.CustomerID == -1){
                    setMessage({message: 'This Aadhar/Passport No. is already registered.', type: 'warning'})
                }
            }
            setLoader(false)
            
        } else {
            if (state.AadharNumber == "") {
                setMessage({message: 'Please enter Adhar/Passport No.', type: 'warning'})
                return false
            } else if (state.FirstName == "") {
                setMessage({message: 'Please enter Fullname.', type: 'warning'})
                return false
            } else if (state.MobileNo1 == "") {
                setMessage({message: 'Please enter Mobile No.', type: 'warning'})
                return false
            } else if (state.IsMobileSmartPhone == "" || state.IsMobileNFCEnabled == "") {
                setMessage({message: 'Please select Smartphone / Has NFS.', type: 'warning'})
                return false
            }
        }

    }



    function handledChange(e, name, check) {
        if (check == "checkbox") {
            seState({ ...state, [name]: e.target.checked ? 1 : 0 })
        }else if(name == "MobileNo1"){
            seState({ ...state, [name]: e})
        } else {
            seState({ ...state, [name]: e.target.value })
        }

    }
    return <Fragment>
        <div className="card splid-card">
            <div className="row"><div className="col m6 s12"><Title title={`CordonOff - Traveller Register`} /></div></div>
            <div className="row">
                <div className="col m12 s12">
                    <h4 className="mini-title2">
                        <span class="material-icons">table_chart</span>Register</h4>
                </div>
            </div>
            <div className="row">
                <div className="col m6 s12">
                    <Input onFocus={() => setMessage({message : ''})}  minLength="1" maxLength="16" onChange={(e) => handledChange(e, 'AadharNumber')} placeholder="Aadhar/Passport No. *" />
                </div>
                <div className="col m6 s12 mt15">
                    <Input onFocus={() => setMessage({message : ''})} onChange={(e) => handledChange(e, 'FirstName')} placeholder="Full Name * " />
                </div>
            </div>
            <div className="row">
                <div className="col m6 s12">
                    {/* <Input onFocus={() => setMessage({message : ''})} type="number" minLength="1" maxLength="10" onChange={(e) => handledChange(e, 'MobileNo1')} placeholder="Mobile No *" /> */}
                    <InputNumber style={{ width: '100%' }} onFocus={() => setMessage({message : ''})} maxLength="10" onChange={(e) => handledChange(e, 'MobileNo1')} placeholder="Mobile No *" />
                </div>
                <div className="col m6 s12 mt15">
                    <Checkbox onFocus={() => setMessage({message : ''})} onChange={(e) => handledChange(e, 'IsMobileSmartPhone', 'checkbox')}>Is Smartphone</Checkbox>
                    <Checkbox onFocus={() =>setMessage({message : ''})} onChange={(e) => handledChange(e, 'IsMobileNFCEnabled', 'checkbox')}>Has NFC</Checkbox>
                </div>
            </div>
            <div className="row">
                <div className="col m6 s12"></div>
                <div className="col m6 s12 text-right" style={{ textAlign: 'right' }}>
                    <Button>Clear</Button>&nbsp;
                    <Button loading={loader} onClick={registerUser} type="primary">Register</Button></div>
            </div>

            {message.message !== "" && <div className="row">
                <Alert message={message.message} type={message.type} />
            </div>}

        </div>
    </Fragment>
}

export default withRouter(TravellerRegister)