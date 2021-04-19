import React, { Fragment, useState, useEffect } from 'react'
import { Title } from '../../components/Ft'
import { Input, Button, AutoComplete, Alert, InputNumber } from 'antd'
import { Link } from 'react-router-dom';
import { API } from '../../API';
import { useHistory } from 'react-router-dom'
const { TextArea } = Input;
export default function TravellerHistory({ data }) {
    const history = useHistory()
    const [travelTo, setTravelTo] = useState({
        "AddressLine1": "",
        "City": "",
        "CustomerID": '',
        "IsHomeQuarantine": 0,
        "IsMobileNFCEnabled": 0,
        "IsMobileSmartPhone": 0,
        "PinCode": "",
        "State": "",
        "TravelHistoryID": 0,
        "VialotionID": 0,
        "MobileNo2": ""
    })


    const [country, setCountry] = useState([])
    const [state, setState] = useState([])
    const [city, setCity] =useState([])
    const [IndiaStates, setIndiaStates] = useState([])
    const [currentState, setCurrentState] = useState('India')
    const [load, setLoad] = useState(false)

    const [travelFrom, setTravelFrom] = useState({
        "AddressLine1": "",
        "City": "",
        "CustomerID": '',
        "IsHomeQuarantine": 0,
        "IsMobileNFCEnabled": 0,
        "IsMobileSmartPhone": 0,
        "PinCode": "",
        "State": "",
        "TravelHistoryID": 0,
        "VialotionID": 0,
        "Country": "",
        "TravellingToID": ""
    })

    const [message, setMessage] = useState({
        message: '',
        type: ''
    })

    const stateDropDown = [
        { value: 'Andhra Pradesh' }
    ];

    const options = [
        { value: 'Visakhapatnam' },
        { value: 'Vijayawada' },
        { value: 'Rajamahendravaram' },
        { value: 'Guntur' },
        { value: 'Kakinada' },
        { value: 'Nellore' },
        { value: 'Kurnool' },
        { value: 'Kadapa' },
        { value: 'Tirupati' },
        { value: 'Eluru' },
        { value: 'Ongole' },
        { value: 'Anantapur' },
        { value: 'Vizianagaram' },
        { value: 'Tenali' },
        { value: 'Proddatur' },
        { value: 'Nandyal' },
        { value: 'Adoni' },
        { value: 'Madanapalle' },
        { value: 'Machilipatnam' },
        { value: 'Chittoor' },
        { value: 'Hindupur' },
        { value: 'Bhimavaram' },
        { value: 'Srikakulam' },
        { value: 'Anakapalle' },
        { value: 'Tadepalligudem' },
        { value: 'Dharmavaram' },
        { value: 'Gudivada' },
        { value: 'Narasaraopet' },
        { value: 'Tadipatri' },
        { value: 'Chilakaluripet' },
        { value: 'Palakollu' },
        { value: 'Amaravati' },
        { value: 'Kavali' },
    ];

   
    async function getCountry(){
        let country = await  API('get', null,  `Customer/GetCountries`)
        if(country.data != ""){
            let newObj = []
            let Obj =  JSON.parse(country.data)
            for(let i = 0; i < Obj.length; i++){
                let newPair = {value: Obj[i]}
                newObj.push(newPair)
            }
            if(newObj.length > 0){
                setCountry(newObj)
            }else{
                setCountry([])
            }
        }
    }

    async function getState(){
        let stateData = await  API('get', null,  `Customer/GetStatesbasedonCountry/${travelFrom.Country}`)
        if(stateData.data != ""){
            let newObj = []
            let Obj =  JSON.parse(stateData.data)
            for(let i = 0; i < Obj.length; i++){
                let newPair = {value: Obj[i]}
                newObj.push(newPair)
            }
            if(newObj.length > 0){
                setState(newObj)
            }else{
                setState([])
            }
        }
    }

    async function getIndiStates(){
        let country = await  API('get', null,  `Customer/GetStatesbasedonCountry/${currentState}`)
        if(country.data != ""){
            let newObj = []
            let Obj =  JSON.parse(country.data)
            for(let i = 0; i < Obj.length; i++){
                let newPair = {value: Obj[i]}
                newObj.push(newPair)
            }
            if(newObj.length > 0){
                setIndiaStates(newObj)
            }else{
                setIndiaStates([])
            }
        }
    }

    async function getCity(data){
        let cityData = await  API('get', null,  `Customer/GetCitybasedonState/${data}`)
        if(cityData.data != ""){
            let newObj = []
            let Obj =  JSON.parse(cityData.data)
            for(let i = 0; i < Obj.length; i++){
                let newPair = {value: Obj[i]}
                newObj.push(newPair)
            }
            if(newObj.length > 0){
                setCity(newObj)
            }else{
                setCity([])
            }
        }
    }

    useEffect(() => {
        setTravelTo({
            ...travelTo,
            CustomerID: data.CustomerID
        })
        setTravelFrom({
            ...travelFrom,
            CustomerID: data.CustomerID
            //CustomerID: 38
        })
    }, [data])

    function handleChange(e, name) {
        if (name == "State" || name =="MobileNo2" || name == "City") {
          
            setTravelTo({ ...travelTo, [name]: e })
        } else {
            setTravelTo({ ...travelTo, [name]: e.target.value })
        }
    }

    function handleChange1(e, name) {
        if (name =="Country" || name == "State" || name == "City") {
            setTravelFrom({ ...travelFrom, [name]: e })
        }
        else {
            setTravelFrom({ ...travelFrom, [name]: e.target.value })
        }

       // getState()
    }


    async function saveUserData() {
        if (travelTo.State == "") {
            setMessage({ message: 'Please select To State.', type: 'warning' })
            return false
        } else if (travelTo.City == "") {
            setMessage({ message: 'Please select To City.', type: 'warning' })
            return false
        } else if (travelTo.PinCode == "") {
            setMessage({ message: 'Please enter To PinCode.', type: 'warning' })
            return false
        } else if (travelTo.MobileNo2 == "") {
            setMessage({ message: 'Please enter To Contact No.', type: 'warning' })
            return false
        } else if (travelTo.AddressLine1 == "") {
            setMessage({ message: 'Please enter To Address.', type: 'warning' })
            return false
        }

        if (travelFrom.State == "") {
            setMessage({ message: 'Please select From State.', type: 'warning' })
            return false
        } else if (travelFrom.City == "") {
            setMessage({ message: 'Please select From City.', type: 'warning' })
            return false
        } else if (travelFrom.PinCode == "") {
            setMessage({ message: 'Please enter From PinCode.', type: 'warning' })
            return false
        } else if (travelFrom.MobileNo2 == "") {
            setMessage({ message: 'Please enter From Contact No.', type: 'warning' })
            return false
        } else if (travelFrom.AddressLine1 == "") {
            setMessage({ message: 'Please enter From Address.', type: 'warning' })
            return false
        }

        setLoad(true)

        let travelToData = travelTo
        let resTo = await API('post', travelToData, `Customer/SETCustomerTravellingTo`)

        if (resTo.data !== "") {
            let data = JSON.parse(resTo.data)
            await setTravelFrom({ ...travelFrom, TravellingToID: data.TravellingToID })
        }

        let travelFromData = { ...travelFrom, TravellingToID: data.TravellingToID }
    
        let resFrom = await API('post', travelFromData, `Customer/CustomerTravelHistory`)
   
        if (resFrom.data !== "") {
            let data = JSON.parse(resFrom.data)
            if (data.IsRegistrationCompleted == 1) {
                setLoad(false)
                setTimeout(() => {
                    history.push('/my-dashboard/1')
                }, 1500)
                setMessage({ message: 'Successfully saved.', type: 'success' })
                return false
            } else {
                setLoad(false)
                setMessage({ message: 'Something went wrong!.', type: 'warning' })
                return false
            }
        }

    }

    return <Fragment>
        <div className="card splid-card">
            <div className="row"><div className="col m6 s12"><Title title={`CordonOff – Travel History`} /></div></div>

            {message.message !== "" && <div className="row">
                <div className="col m12 s12"> <Alert message={message.message} type={message.type} /></div>
            </div>}
            <div className="row">
                <div className="col m6 s12">
                    <h4 className="mini-title2">
                        <span class="material-icons">flight_takeoff</span>Travelling To</h4>
                    <br />
                    <div className="row">
                        <div className="col m12 s12">
                            <AutoComplete
                                onFocus={() =>  getIndiStates()}
                                style={{
                                    width: '100%',
                                }}
                                options={IndiaStates}
                                placeholder="Search State *"
                                onChange={(e) => handleChange(e, 'State')}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12 s12">
                            <AutoComplete
                                onFocus={() => getCity(travelTo.State)}
                                style={{
                                    width: '100%',
                                }}
                                disabled={(IndiaStates.length>0 && travelTo.State !="")? false:true}
                                options={city}
                                placeholder="Search City *"
                                onChange={(e) => handleChange(e, 'City')}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div></div>
                    <div className="row">
                        <div className="col m12 s12">
                            <Input
                                onFocus={() => setMessage({ message: '' })}
                                onChange={(e) => handleChange(e, 'PinCode')}
                                placeholder="Pin Code *" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12 s12">
                            <InputNumber style={{ width: '100%' }}
                                onFocus={() => setMessage({ message: '' })}
                                maxLength="10" onChange={(e) => handleChange(e, 'MobileNo2')}
                                placeholder="Alt. Contact No. *" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12 s12">
                            <TextArea
                                onFocus={() => setMessage({ message: '' })}
                                placeholder="Address *"
                                onChange={(e) => handleChange(e, 'AddressLine1')}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col m6 s12">
                    <h4 className="mini-title2"><span class="material-icons">flight_land</span>Travelling From</h4>
                    <br />
                    <div className="row">
                        <div className="col m12 s12">
                            <AutoComplete
                                style={{
                                    width: '100%',
                                }}
                                id="Country2"
                                onFocus={() => getCountry()}
                                options={country}
                                placeholder="Search Country *"
                                onChange={(e) => handleChange1(e, 'Country')}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12 s12">
                            <AutoComplete
                                style={{
                                    width: '100%',
                                }}
                                id="State2"
                                disabled={(country.length>0 && travelFrom.Country !="")? false:true}
                                onFocus={() =>  getState()}
                                options={state}
                                placeholder="Search State *"
                                onChange={(e) => handleChange1(e, 'State')}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12 s12">
                            <AutoComplete
                                style={{
                                    width: '100%',
                                }}
                                id="City2"

                                onFocus={() => getCity(travelFrom.State)}
                                options={city}
                                disabled={(state.length>0 && travelFrom.State !="")? false:true}
                                placeholder="Search City *"
                                onChange={(e) => handleChange1(e, 'City')}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div></div>
                    <div className="row">
                        <div className="col m12 s12">
                            <Input
                                onFocus={() => setMessage({ message: '' })}
                                onChange={(e) => handleChange1(e, 'PinCode')}
                                placeholder="Pin Code *" />
                        </div>
                    </div>
                  
                    <div className="row">
                        <div className="col m12 s12">
                            <TextArea
                                onFocus={() => setMessage({ message: '' })}
                                placeholder="Address *"
                                onChange={(e) => handleChange1(e, 'AddressLine1')}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12 s12" style={{ textAlign: 'right' }}>
                            <Button>Clear</Button>&nbsp;
                            <Link to={`/registraion/${1}`}><Button type="primary">
                                Previous</Button></Link>&nbsp;
                            <Button loading={load} type="primary" onClick={saveUserData}>Save</Button>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    </Fragment>
}