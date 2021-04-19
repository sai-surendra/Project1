import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/Dashboard.css'
import { Input, Button, AutoComplete } from 'antd'
// import moment from 'moment';


export default function Main({ state, handleChange, search }) {
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

    function Th(status) {
        return <Fragment>
            <thead>
                <tr>
                    <th>Aadhar</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Address</th>
                    <th hidden>Pin Code</th>
                    <th>Reg. Date</th>
                    <th>Due Days</th>
                    <th>Status</th>
                    <th>Geo Violation Reason</th>
                    <th>Band Violation Reason</th>
                    <th hidden>View</th>
                </tr>
            </thead>
        </Fragment>
    }

    function Body(state, status) {
        return <Fragment>
            <tbody>
                {state.length > 0 ? state.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.AadharNumber}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.MobileNo1}</td>
                            <td>{item.City}</td>
                            <td>{item.AddressLine1}</td>
                            <td hidden>{item.PinCode}</td>
                            <td>{item.CreatedDate}</td>
                            <td>{item.DueDate}</td>
                            <td>{item.Status}</td>
                            <td>{item.GeoStatus ? item.GeoStatus:`N/A`}</td>
                            <td>{item.BandViolationType ? item.BandViolationType : `N/A`}</td>
                            <td hidden>
                                <Link to={`/user/${1}`}><span class="material-icons">visibility</span></Link></td>
                        </tr>
                    );
                }) : <tr><td colSpan="12" className="text-center">No data found!</td></tr>}
            </tbody>
        </Fragment>
    }

    return <Fragment>

        <br />
        <div className="row">
            <div className="col m4 s6">
                <div className="text_center card tile_1">
                    <p>Enrolled</p>
                    <h2 className="tile-data">{state.length}</h2>
                </div>
            </div>
            <div className="col m4 s6">
                <div className="text_center card tile_2">
                    <p>Qurantined</p>
                    <h2 className="tile-data">{state.length}</h2>
                </div>
            </div>
            <div className="col m4 s12 mt15">
                <div className="text_center card tile_3">
                    <p>Violators</p>
                    <h2 className="tile-data">{state.filter(it => it.Status == "Violation").length}</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col m12 s12">
                <div className="row">
                    <div className='col m3 s12'>
                        <AutoComplete
                            style={{
                                width: '100%',
                            }}
                            options={options}
                            placeholder="Search city..."
                            onChange={(e) => handleChange(e, 'city')}
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </div>
                    <div className='col m3 s12 mt15'>
                        <Input onChange={(e) => handleChange(e, 'pincode')} placeholder="Pin Code" />
                    </div>

                    <div className='col m3 s12 mt15'>
                        <Input placeholder="Search Phone/Aadhar" onChange={(e) => handleChange(e, 'adp')} />
                    </div>
                    <div className='col m3 s12 mt15'>
                        <Input placeholder="Search Name" onChange={(e) => handleChange(e, 'name')} />
                        <div style={{ marginTop: '2px', textAlign: 'right' }}> <Button type="primary" onClick={search}>Search</Button></div>
                    </div>

                </div>

            </div>
        </div>
        <div className="row">
            <div className="col m12 s12">
                <div className="relative">

                    <div className="responsive-table">
                        <table className="table striped">
                            {Th(false)}
                            {Body(state, true)}
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </Fragment>
}