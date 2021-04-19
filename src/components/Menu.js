import React, { Fragment, useState } from 'react'
import { Modal, Button, message, Input, Alert, Select, InputNumber } from 'antd';
import '../assets/Dashboard.css'
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import Logo from '../assets/cordonoff2.png'
import UserIcon from '../assets/user.png'
import { API } from '../API';
import ToastMsg from './Toast';


const { Option } = Select;
function Menu(props) {
  let history = useHistory();
  const params = useParams()
  const [visible, setVisible] = useState(false)
  const [load2, setLoad2] = useState(false)
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)
  const [modelType, setModelType] = useState(0)
  const [getQuote, setQuote] = useState({
    FirstName: '',
    MobileNo1: '',
    EmailID: '',
    Organization: '',
    JobTitle: '',
    HearAbout: ''
  })
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const [open, setOpen] = useState({ message: "", variant: "", isDisplay: false });


  async function showModal(id) {
    await setModelType(id)
    await setVisible(true)
  };

  function handleOk() {
    setVisible(false)
  };

  function handleCancel() {
    setVisible(false)
  };

  function login() {
    debugger
    setLoad(true)
    if (state.username === "admin" && state.password === "admin") {
      setTimeout(() => {
        setLoad(false)
        setVisible(false)
        history.push("/my-dashboard/1");

      }, 1500)
    } else {

      setOpen({ message: "Please enter valid credentials!", variant: "error", isDisplay: true })
      setLoad(false)
      return false
    }

  }

  function logOut() {
    history.push("/");
  }

  async function validate(e, name) {
    await setState({ ...state, [name]: e.target.value })
  }

  function quoteChange(e, name) {
    if (name == "MobileNo1" || name == "HearAbout") {
      setQuote({ ...getQuote, [name]: e })
    } else {

      setQuote({ ...getQuote, [name]: e.target.value })
    }
  }

  async function submitQuote() {
    if (getQuote.FirstName == "") {
      setOpen({ message: "Please enter Full Name!", variant: "warning", isDisplay: true })
      return false
    } else if (getQuote.MobileNo1 == "") {
      setOpen({ message: "Please enter Phone Number!", variant: "warning", isDisplay: true })
      return false
    } else if (getQuote.EmailID == "") {
      setOpen({ message: "Please enter Email Address!", variant: "warning", isDisplay: true })
      return false
    } else if (getQuote.Organization == "") {
      setOpen({ message: "Please enter Organization!", variant: "warning", isDisplay: true })
      return false
    } 
    // else if (getQuote.JobTitle == "") {
    //   setOpen({ message: "Please enter Job Title!", variant: "warning", isDisplay: true })
    //   return false
    // }

    setLoad2(true)
    let sentData = getQuote
    let res = await API('post', sentData, 'Customer/UpsertDemo')
    if (res.data !== "") {
      let data = JSON.parse(res.data)
      if (data.DemoId > 0) {
        await setOpen({ message: "Thank you for contacting us. We are pleased to have the privilege to serve you. Our team of Experts will contact you shortly.", variant: "success", isDisplay: true })
        setTimeout(() =>{
          history.push("/home");
          setVisible(false)
        }, 1500)
       
        setLoad2(false)
      } else {
        setOpen({ message: "Something went wrong, please try again.", variant: "error", isDisplay: true })
        setLoad2(false)
        return false
      }
    }
  }


  return (
    <Fragment>
      <ToastMsg toast={open} close={(close) => { setOpen({ ...open, isDisplay: close }) }} />
      <Modal
        title={modelType != "1" ? `Login` : `Want a demo?`}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          [modelType != "1" ? <><Button onClick={handleCancel} type="primary">Cancel</Button>
          <Button loading={load} onClick={login} type="primary">{load ? 'Please wait...' : 'Login'} </Button></> : <>
              <Button loading={load2} onClick={submitQuote} type="primary">{load2 ? `Sending...` : `GET A DEMO`}</Button>
            </>]
        }
      >

        {modelType != "1" ? <> <div className="row"><div className="col m12 s12"><Input onChange={(e) => validate(e, 'username')} placeholder="Username" /></div></div>
          <div className="row"><div className="col m12 s12"><Input type="password" onChange={(e) => validate(e, 'password')} placeholder="Password" /></div></div></> :
          <>
            <div className="row">
              <div className="col m6 s6">
                <Input type="text" onChange={(e) => quoteChange(e, 'FirstName')} placeholder="Full Name *" />
              </div> 
              <div className="col m6 s6">
                <InputNumber style={{ width: '100%' }} maxLength="10" onChange={(e) => quoteChange(e, 'MobileNo1')} placeholder="Phone Number *" />
              </div>
            </div>
            <div className="row">
              <div className="col m6 s6">
                <Input type="email" onChange={(e) => quoteChange(e, 'EmailID')} placeholder="Email Address *" />
              </div>
              <div className="col m6 s6">
                <Input onChange={(e) => quoteChange(e, 'Organization')} placeholder="Organization Name *" />
              </div>
            </div>
            <div className="row">
              <div className="col m6 s6" hidden>
                <Input type="text" onChange={(e) => quoteChange(e, 'JobTitle')} placeholder="Job Title *" />
              </div>
              <div className="col m12 s12">
                <Select onChange={(e) => quoteChange(e, 'HearAbout')} defaultValue="How did you hear about CordonOff?" style={{ width: '100%' }}>
                  <Option value="Newspaper">Newspaper</Option>
                  <Option value="Website">Website</Option>
                  <Option value="Reference">Reference</Option>
                  <Option value="Social media">Social media</Option>
                  <Option value="Word of Mouth">Word of Mouth</Option>
                </Select>
              </div>
            </div>
          </>
        }
      </Modal>
      <div className="container">
        <nav className={(params.id !== undefined && params.id !== '0') ? `white nav--bar full-lenfgth` : `white nav--bar`} role="navigation">
          <div className="navbar--block">
            <Link to={'/'} id="logo-container" className="lgo">
              <img src={Logo} />
            </Link>
            
            <ul className="flex">
              {(params.id !== undefined && params.id !== '0') ? <><li>
                <a id="" className="user-icon"><img src={UserIcon} /></a>
              </li>
                <li className="user-name hide-md-low">Admin</li>
                <li className="login--menu" onClick={logOut}><span className="log material-icons">
                  power_settings_new
                        </span>&nbsp;&nbsp;<span className="hide-md-low">LOG OUT</span></li></> : <>
                        
                  <li onClick={() => showModal('2')} className="login--menu">< ><span className="log material-icons">account_circle</span> LOGIN</></li>
                </>}
            </ul>
          
          
          </div>
        </nav>
        {!(params.id !== undefined && params.id !== '0') && <span onClick={() => showModal('1')} className="demo--menu"><><span className="material-icons log">local_post_office</span>&nbsp;GET A DEMO</></span>}
      </div>

    </Fragment>
  )
}

export default withRouter(Menu)