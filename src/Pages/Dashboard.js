import React, { Fragment, useState, useEffect, Suspense } from 'react'
import '../assets/Dashboard.css'
import { withRouter } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress';

import {Slider} from '../components/Ft'
import { API } from '../API'

const Main = React.lazy(() => import('./Dashboard/Main'));
const Menu = React.lazy(() => import('../components/Menu'));
const Footer = React.lazy(() => import('../components/Footer'));


function Dashboard(props) {
    const [state, setState] = useState([])
    const [load, setLoad] = useState(false)
    const [filter_, setFilter] = useState({
        city: '',
        pincode: '',
        adp: '',
        name: ''
    })
    useEffect(() => {
        getData()

    }, [])

    async function getData(){
        setLoad(true)
        const res = await API('get', '',  `customer/GETCustomerBasicInfo`)
        if (typeof res.data == "string") {
            setState(JSON.parse(res.data))
            setLoad(false)
        }
        setLoad(false)
    }
  

    function handleChange(e, name) {
        if (name == "city") {
            setFilter({ ...filter_, [name]: e })
        } else {
            setFilter({ ...filter_, [name]: e.target.value })
        }
    }


    function search() {
        if(filter_.city == "" && filter_.pincode == "" && filter_.adp =="" && filter_.name == ""){
            getData()
            return false
        }else{
            setLoad(true)
            var updatedList = state;
            updatedList = updatedList.filter((item) => {
                //return item.City == (filter_.city == "" ? item.City : filter_.city) &&
                    return  item.City.toLowerCase().search(
                        filter_.city.toLowerCase()) !== -1
                    && 
                    //item.PinCode == (filter_.pincode == "" ? item.PinCode : filter_.pincode) 
                    item.PinCode.toLowerCase().search(
                        filter_.pincode.toLowerCase()) !== -1
                    
                    &&

                   (item.AadharNumber.toLowerCase().search(filter_.adp.toLowerCase()) !== -1 || item.MobileNo1.toLowerCase().search(filter_.adp.toLowerCase()) !== -1)

                    // (item.AadharNumber == (filter_.adp == "" ? item.AadharNumber : filter_.adp) || item.MobileNo1 == (filter_.adp == "" ? item.MobileNo1 : filter_.adp)) 
                    
                    &&
                    //item.FirstName == (filter_.name == "" ? item.FirstName : filter_.name.toLowerCase())
                    item.FirstName.toLowerCase().search(
                        filter_.name.toLowerCase()) !== -1
            });
            setState(updatedList)
            setLoad(false)
        }
       
    }

    return <Fragment>
       {load &&  <div className="preloader"> <CircularProgress /></div>}
         <Suspense fallback={<></>}><Menu /></Suspense>
        <Slider reg={true} title={`My Dashboard`} />
        <div className="container">
            <div className="card">
                <Suspense fallback={<></>}><Main state={state} search={search} handleChange={handleChange} /></Suspense>
            </div>
        </div>
        <Suspense fallback={<></>}><Footer /></Suspense>
    </Fragment>
}

export default withRouter(Dashboard)