import React, {Fragment, Suspense} from 'react'
import './Layout.css'
import { withRouter } from 'react-router-dom';

const Menu = React.lazy(() => import('../Menu'));
const Footer = React.lazy(() => import('../Footer'));

 function Layout(props){
    return<Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Menu/>
          {props.children}
          <Footer/>
        </Suspense>
      </Fragment>
}

export default withRouter(Layout)