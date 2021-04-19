import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'

function Layout(props){
 
    return<Fragment>
        
          {props.children}
         
    </Fragment>
}

export default withRouter(Layout)