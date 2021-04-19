import React, { Fragment } from 'react'
import Card from './Card'
import Asset from './Asset'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import HeroSlider from '../../components/Ft'

export default function HomePage() {
    return <Fragment>
        <Menu />
        <div className="main-hero">
            <HeroSlider alt={`assets/bg-mobile.jpg`} img={`assets/CordonOff_Small3.jpg`}>
                <>
                <p style={{color:'#fff', fontSize:'28px', marginTop:'30px'}}>EMPOWERING AGENCIES WITH GEOFENCE ENFORCEMENT OF PUBLIC MOVEMENT</p>
                
                <p style={{fontSize:'16px'}}>Real time monitoring and alerting people on movement from a geo-fenced quarantine location during the COVID-19 restrictions.</p>
                </>
            </HeroSlider>
            <div className="container cardDesign">
                <div className="card--padd">
                    <div className="card-container">
                        <div className="row flex mb0">
                            <div className="col m3 m0 c1">
                                <Card title={"Enrolling"} color={`c1`}>
                                    <div className="mb10">
                                        <img className="responsive-img img--cente" src="assets/1.png" alt="Wearable bands to detect coronavirus subjects" />
                                        <h3>Enrolling</h3>
                                        <p>Self Registration<br /> <small>(For NFC enabled Smartphone Users)</small></p>
                                        <ul>
                                            <li>Download Cordonoff app from play store.</li>
                                            <li>Self-register with aadhar, mobile, travel and address details.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Help Registration<br /> <small>(For Non-NFC Smartphone Users)</small></p>
                                        <ul>
                                            <li>Register with aadhar, mobile and address details.</li>
                                        </ul>
                                    </div>
                                   
                                </Card>
                            </div>
                            <div className="col m3 m0 c2">
                                <Card title={"Activating"} color={`c2`}>
                                    <div className="">
                                        <img className="responsive-img img--cente" src="assets/2.png" alt="Quarantine tracking wristbands" />
                                        <h3>Activating</h3>
                                        <p>Print & Tag Smart band<br /> <small>(For Smartphone Users)</small></p>
                                        <ul>
                                            <li>Print/Encode tag with user info.</li>
                                            <li>Affix Tag to wrist of the user.</li>
                                            <li>Activate tag by scanning and validating.</li>
                                        </ul>
                                    </div>
                                 
                                </Card>
                            </div>
                            <div className="col m3 m0 c3">
                                <Card title={"Monitoring"} color={`c3`}>
                                    <div className="mb10">
                                        <img className="responsive-img img--cente" src="assets/3.png" alt="IoT and RFID based smart bands for quarantine monitoring" />
                                        <h3>Monitoring</h3>
                                        <p>Monitor<br /> <small>(For Smartphone Users)</small></p>
                                        <ul>
                                            <li>Cordonoff App will run in the background, detects the Wristband tag, validates the person geofence location.</li>
                                            <li>Sends alerts to the central system in-case of Violation.</li>
                                            <li>Respective ward representative or health official will visit the user and scans the tag on frequent basis.</li>
                                        </ul>
                                    </div>
                                    {/* <div className="">

                                        <p><small>(For Smartphone Users)</small></p>
                                        <ul>
                                            <li>Respective Ward
                                            Representative will visit
                                            the traveller and scans the tag on a frequent basis.</li>
                                        </ul>
                                    </div> */}
                                  
                                </Card>
                            </div>
                            <div className="col m3 m0 c4">
                                <Card title={"Alerting"} color={`c4`}>
                                    <div className="mb10">
                                        <img className="responsive-img img--cente" src="assets/4.png" alt="Wearable bands to detect coronavirus subjects" />
                                        <h3>Alerting</h3>
                                        <p>Control<br /> <small>(For Smartphone Users)</small></p>
                                        <ul>
                                            <li>Central system will detect the violations and alters the concerned public health and enforcement authorities.</li>
                                            <li>Enforcement agency personnel will visit the user location to take necessary action upon violations.</li>
                                        </ul>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* style={{backgroundImage:'url("assets/banner-texture.gif")'}} */}
        <section id="asset" >
            <Asset />
        </section>
       <Footer/>
    </Fragment>
}