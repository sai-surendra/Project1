import React, { useState } from 'react'
import { Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function Login({getValidCredentials}) {

  const [state, setState] = useState({
    username:'',
    password:''
  })

  async function validate(e, name){
    await setState({[name]: e.target.value})
  }

  

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
        <div className="row"><div className="col m12 s12"><Input onChange={(e) => validate(e, 'username')} placeholder="Username" /></div></div>
        <div className="row"><div className="col m12 s12"><Input type="password" onChange={(e) => validate(e, 'password')} placeholder="Password" /></div></div>

    </Form>
  );
};
