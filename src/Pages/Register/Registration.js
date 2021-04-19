import React, { Fragment, Suspense } from 'react'
import { Steps, Button, message } from 'antd';
import { withRouter } from 'react-router-dom'

const TravellerRegister = React.lazy(() => import('./TravellerRegister'));
const TravellerHistory = React.lazy(() => import('./TravelHistory'));
const OtpConfirmation = React.lazy(() => import('./Otp'));

const { Step } = Steps;



class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      steps: [1, 2, 3],
      resData :[]
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  static getDerivedStateFromProps(props, state){
    if(props.match.params.id !== state.current){
      return{
        ...state, 
        current: props.match.params.id
      }
    }return null
  }

  componentDidMount() {
    this.setState({ ...this.state, current: this.props.match.params.id })
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }


  getResult = async (data) =>{
    debugger
    await this.setState({...this.state, resData: data})
  }
  

  renderForm = (current) => {
    if (current == 1) {
      return <Fragment>
       <Suspense fallback={<></>}> <TravellerRegister getResult={this.getResult}/></Suspense>
      </Fragment>
    } else if (current == 2) {
      return <Fragment>
       <Suspense fallback={<></>}><OtpConfirmation /></Suspense> 
       
      </Fragment>
    }
    else if (current == 3) { return <Fragment> <Suspense fallback={<></>}><TravellerHistory data={this.state.resData} /></Suspense></Fragment> }
  }

  render() {
    const { current } = this.state;
    return (
      <div className="container">
     
      <div className="row">  <div className="col m8 offset-m2 s12">
          <Steps current={current}>
            {this.state.steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{this.renderForm(current)}</div>
      
        </div></div>
      </div>
    );
  }
}

export default withRouter(Registration)