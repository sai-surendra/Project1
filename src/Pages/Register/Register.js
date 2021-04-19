import React, { Fragment, Suspense } from 'react'
import { Slider } from '../../components/Ft'


const Menu = React.lazy(() => import('../../components/Menu'));
const Footer = React.lazy(() => import('../../components/Footer'));
const Registration = React.lazy(() => import('./Registration'));

export default function Register(){
    return <Fragment>
        <Suspense fallback={<></>}>
            <Menu />
            <Slider reg={false} title={`Registration`} />
            <Registration />
            <Footer/>
        </Suspense>
    </Fragment>
}