import React, { Fragment } from 'react'
import Viewmore from './Viewmore'

import Collapsable from './Collapsable'



export default function Asset() {


    function background() {
        return <Fragment>
            <div className="card--content">
                <div className="mini-title">
                    Background
                            <div className="glbNew-strp_sprt"></div>
                </div>
                <ul>
                    <li>Covid-19 has killed more than 200,000 people and triggered a severe global economic recession. Governments want to get people back to work and ensure safety by utilizing quarantine enforcement technology in the form of Quarantine tracking wristbands that helps authorities to track and strictly enforce isolation for subjects who are traveling across borders. </li>
                    <li>These are the wearable bands to monitor and track the Corona virus subjects. As the governments deal with this intensifying crisis and plan for post-peak management of the pandemic, many are looking to digital surveillance system to halt the spread of this disease. </li>
                    <li>Awareness of the seriousness of this threat and a determination to take all reasonable precautions in this new reality is driving interest in available tools for tracking and monitoring capabilities using IoT and RFID technologies into smart bands, in spaces where people travel. Recent events have shown us the value of early detection and tracking data that allows for quick identification of the possibly infected.</li>
                </ul>

                <Viewmore>
                    <div className="container">
                        <div className="row">
                            <div className="col m10 offset-m1 s12">
                                <h4>Background</h4>
                                <p>
                                    Covid-19 has killed more than 200,000 people and triggered a severe global economic recession. Governments want to get people back to work and ensure safety by utilizing quarantine enforcement technology in the form of Quarantine tracking wristbands that helps authorities to track and strictly enforce isolation for subjects who are traveling across borders.
                                                </p>
                                <p>These are the wearable bands to monitor and track the Corona virus subjects. As the governments deal with this intensifying crisis and plan for post-peak management of the pandemic, many are looking to digital surveillance system to halt the spread of this disease.</p>
                                <p>Awareness of the seriousness of this threat and a determination to take all reasonable precautions in this new reality is driving interest in available tools for tracking and monitoring capabilities using IoT and RFID technologies into smart bands, in spaces where people travel. Recent events have shown us the value of early detection and tracking data that allows for quick identification of the possibly infected.</p>
                                <p>To get ready for the new reality, we need to start acting now, leveraging the proven technology of Quarantine tracking wristbands that are already widely adopted on the market. Digital surveillance and geo-fence enforcement and IoT/RFID enabled smart bands can be used for Quarantine monitoring to quickly identify and break the chain of virus transmission at the local level, predict medical resource needs to pre-emptively allocate them accordingly, and measure adherence to national emergency directives and policies.</p>
                            </div>
                        </div>
                    </div>
                </Viewmore>

            </div>
        </Fragment>
    }

    function whatIsCordonoff() {
        return <Fragment>
            <div className="card--content">
                <div className="mini-title">
                    What is Cordonoff?
                            < div className="glbNew-strp_sprt"></div>
                </div>
                <ul>
                    <li>Cordonoff is a Digital Surveillance and Geo-Fence Enforcement Application designed to slow down the spread of the coronavirus. By using this application enforcement agencies and public-health workers can track and monitor the subjected people’s movement history and determine whoever may have violated the self-quarantine measures. These subjects are monitored and supported through their period of self-quarantine—until they either develop symptoms, pass the window of risk, or proven not to have been exposed.</li>
                    <li>This system provides a more scalable approach to traditional surveillance, which relies on the subject’s memories of his recent travel and visit details. As the coronavirus spreads rapidly across the globe, traditional surveillance measures are unlikely to keep up and would require an “army” of public health workers to ensure public safety.</li>
                    <li>This technology is most effective when it is supported by widespread testing and advanced isolation approaches, but it can have a significant impact on its own in limiting the spread of the disease through enforcing strict vigil upon subjected people to a subjected area, providing follow-up monitoring and support, and even alerting authorities when there are any violations of quarantine directives.</li>
                </ul>
                <Viewmore>
                    <div className="container">
                        <div className="row">
                            <div className="col m10 offset-m1 s12">
                                <h4>What is Cordonoff?</h4>
                                <p>
                                    Cordonoff is a Digital Surveillance and Geo-Fence Enforcement Application designed to slow down the spread of the coronavirus. By using this application enforcement agencies and public-health workers can track and monitor the subjected people’s movement history and determine whoever may have violated the self-quarantine measures. These subjects are monitored and supported through their period of self-quarantine—until they either develop symptoms, pass the window of risk, or proven not to have been exposed.
                                                </p>
                                <p>This system provides a more scalable approach to traditional surveillance, which relies on the subject’s memories of his recent travel and visit details. As the coronavirus spreads rapidly across the globe, traditional surveillance measures are unlikely to keep up and would require an “army” of public health workers to ensure public safety.</p>
                                <p>This technology is most effective when it is supported by widespread testing and advanced isolation approaches, but it can have a significant impact on its own in limiting the spread of the disease through enforcing strict vigil upon subjected people to a subjected area, providing follow-up monitoring and support, and even alerting authorities when there are any violations of quarantine directives.</p>

                                <p>Cordonoff Application allows enforcement agencies to model the spread of the Coronavirus based on AI models based on multiple variables as defined by the WHO. The App was created with five goals in mind:</p>
                                <p>
                                    <ul>
                                        <li>Control the virus spread by identifying likely infection chains early in subjected people.</li>
                                        <li>Create a higher level of people safety health awareness.</li>
                                        <li>Reduce the external costs of false testing.</li>
                                        <li>Improve isolation plans by enforcing strict vigil and control over subjected people movements using geo-fence monitoring.</li>
                                        <li>Notify authorities on quarantine violations for informed decision making (if a subjected person tries to move out the registered geo-fence location)  </li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </Viewmore>
            </div>
        </Fragment>
    }

    function howCordonoffWorks() {
        return <Fragment>
            <div className="card--content">
                <div className="mini-title">
                    How Cordonoff Works?
                                <div className="glbNew-strp_sprt"></div>
                </div>
                <ul>
                    <li>Enforcement official or Public Health worker installs and enrols the suspected individual details in the application which generates a unique NFC tag encoded with details like case ID number, name, age, phone, quarantine location, and days since enrolment.</li>
                    <li>Later, once installed on the individual's smartphone, the app assigns a unique device ID -- a random number and maps with the NFC Tag IDs generated and assigned to the individual. Records of the subjected person movement history are stored in the device for up to 14 days before going to a central server run by the enforcement agency. What’s more, the app connects to devices even when they don’t have an internet connection in order to make sure the individual is adhering to the isolation directives.</li>
                    <li>When adding someone suspected to the system, heal workers ask the subjected person about their occupation in case they need to follow up on workplace exposure, living situations to alert roommates or neighbours, and health provider information should they need to be referred for care. They can also click on people assigned to them to get additional information such as recent notes about the case and details on whether they’re symptomatic.</li>
                </ul>
                <Viewmore>
                    <div className="container">
                        <div className="row">
                            <div className="col m10 offset-m1 s12">
                                <h4>How Cordonoff Works?</h4>
                                <p>Enforcement official or Public Health worker installs and enrols the suspected individual details in the application which generates a unique NFC tag encoded with details like case ID number, name, age, phone, quarantine location, and days since enrolment.</p>
                                <p>Later, once installed on the individual's smartphone, the app assigns a unique device ID -- a random number and maps with the NFC Tag IDs generated and assigned to the individual. Records of the subjected person movement history are stored in the device for up to 14 days before going to a central server run by the enforcement agency. What’s more, the app connects to devices even when they don’t have an internet connection in order to make sure the individual is adhering to the isolation directives.</p>
                                <p>When adding someone suspected to the system, heal workers ask the subjected person about their occupation in case they need to follow up on workplace exposure, living situations to alert roommates or neighbours, and health provider information should they need to be referred for care. They can also click on people assigned to them to get additional information such as recent notes about the case and details on whether they’re symptomatic.</p>
                                {/* <p>

                                                    <h6 className="card__h6">How contact tracing works :</h6>
                                                    <div>
                                                        <h6 className="card__h">1. Testing</h6>
                                                        <p>Contact tracing begins with those who have tested positive for COVID-19. The method is most effective when integrally linked to widespread testing.</p>
                                                    </div>
                                                    <div>
                                                        <h6 className="card__h">2. Identification</h6>
                                                        <p>Contacts are identified and listed: those who have had meaningful exposure to the diagnosed individual during the period of potential transmission, which begins before the onset of symptoms.</p>
                                                    </div>
                                                    <div>
                                                        <h6 className="card__h">3. Notification</h6>
                                                        <p>Contacts are notified of their status, and informed of implications and next steps, such as how to find care. Depending on local public health guidance, quarantine or isolation could be required for high-risk contacts.</p>
                                                    </div>
                                                    <div>
                                                        <h6 className="card__h">4. Follow-up, monitoring,and support</h6>
                                                        <p>Contacts are monitored regularly for symptoms and tested for infection. Results of monitoring help determine the most appropriate intervention, including quarantine.</p>
                                                    </div>
                                                    <p>Approaches to contact tracing share basic elements but can differ in terms of technology: traditional contact tracing
                                                    uses telephone and in-person contact; newer approaches use mobile apps and data. Governments need to evaluate the
                                                    implications of alternative approaches to tracking and tracing for privacy and individual liberties.
                                     </p> */}
                            </div>
                        </div>
                    </div>
                </Viewmore>

            </div>
        </Fragment>
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col m12 s12">
                        <h1 className="title stripe-accent">Introducing Digital Surveillance and Geo-Fence Enforcement Application with Quarantine Tracking Wristbands Technology.</h1>
                        <h2 className="title stripe-accent">Cordonoff – "A cost-effective alternative to blanket lockdowns"</h2>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="row desktop">
                    <div className="col m12 s12">
                        <div className="card--container even">
                            {background()}
                            <div className="img--card">
                                <img alt="img" src="assets/3.jpg" alt="Wearable bands to detect coronavirus subjects" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mobile-disply">
                    <div className="col s12">
                        <div className="img--card">
                            <img alt="img" src="assets/3.jpg" alt="Wearable bands to detect coronavirus subjects" />
                        </div>
                    </div>
                    <div className="col s12">
                        {background()}
                    </div>
                </div>

                <div className="row desktop">
                    <div className="col m12 s12">
                        <div className="card--container odd">
                            <div className="img--card">
                                <img alt="img" src="assets/15.jpg" alt="Quarantine tracking wristbands" />
                            </div>
                            {whatIsCordonoff()}
                        </div>
                    </div>
                </div>

                <div className="row mobile-disply">
                    <div className="col s12">
                        <div className="img--card">
                            <img alt="img" src="assets/15.jpg" alt="Quarantine tracking wristbands" />
                        </div>
                    </div>
                    <div className="col s12">
                        {whatIsCordonoff()}
                    </div>
                </div>


                <div className="row desktop" >
                    <div className="col m12 s12">
                        <div className="card--container even">
                            {howCordonoffWorks()}
                            <div className="img--card">
                                <img alt="img" src="assets/12.jpg" alt="IoT and RFID based smart bands for quarantine monitoring" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mobile-disply">
                    <div className="col s12">
                        <div className="img--card">
                            <img alt="img" src="assets/12.jpg" alt="IoT and RFID based smart bands for quarantine monitoring" />
                        </div>
                    </div>
                    <div className="col s12">
                        {howCordonoffWorks()}
                    </div>
                </div>



                <div className="row">

                    <div className="section-title" >
                        <h3 className="title stripe-accent">Features of Cordonoff - Geo-Fence Enforcement.</h3>
                        <br />
                        <br />
                    </div>
                    <div className="collaps-block-para">
                        <p>Cordonoff is an important tool to curb the spread of infectious diseases like COVID-19. Cordonoff is primarily built with a privacy-preserving protocol for monitoring the subjected people movement using NFC based tracking, that allows for global interoperability.</p>
                        <p>Once enrolled and deployed, this system would use the individual’s smartphone-enabled with NFC to identify any geo -fencing violations and proximity data of the NFC tag to detect possible exposure events while ensuring that privacy is preserved and data is secure. </p>
                        <p>With it, organizations can confidently assess operational risks and wellness while continuously and proactively monitoring for potential liability impacts using real-time decision and analytical risk information. The web platform and app feature:</p>
                    </div><br />
                    <div className="col m12 s12">
                        <div className="item-box col m4 s12">
                            <a >

                                <span class="material-icons">
                                    api
</span>

                                <div>
                                    <h5 className="title-block">Management Communication Hub</h5>

                                    <div>Manage users, view case status (active, pending enrolment, quarantined, recovered, Infected), and access movement history.</div>
                                </div>
                            </a>
                        </div>
                        <div className="item-box col m4 s12" hidden>
                            <a >

                                <span class="material-icons">
                                    api
</span>
                                <div>
                                    <h5 className="title-block">Risk Analysis Dashboard</h5>

                                    <div>Gives agencies/health workers an overall risk score based on anonymized data.</div>
                                </div>
                            </a>
                        </div>
                        <div className="item-box col m4 s12" >
                            <a >

                                <span class="material-icons">
                                    api
</span>

                                <h5 className="title-block">Proximity Alerts</h5>

                                <div>Notifies individuals if they violate any quarantine directive or gets out close to any containment areas, as defined by MoH guidelines.</div>
                            </a>
                        </div>
                        <div className="item-box col m4 s12">
                            <a >

                                <span class="material-icons">
                                    api
</span>

                                <h5 className="title-block">Geo-Fence Enforcement</h5>

                                <div>Automatically alerts enforcement officials on violations and subjected person’s travel to any active cases and instruct the next steps.</div>
                            </a>
                        </div>
                        <div className="item-box col m4 s12" >
                            <a >

                                <span class="material-icons">
                                    api
</span>

                                <h5 className="title-block">Symptom Log</h5>

                                <div>Allows enforcement agencies/health workers to track daily symptoms to manage personal risk and offers a personal risk score.</div>
                            </a>
                        </div>
                        <div className="item-box col m4 s12" >
                            <a >

                                <span class="material-icons">
                                    api
</span>

                                <h5 className="title-block">Access Manager</h5>

                                <div>A frequent QR/NFC scan alert validates the possession of tag with a subjected person. It can be used to prevent access to physical locations beyond geo-tagged range.</div>
                            </a>
                        </div>
                        <div className="item-box col m4 s12 " >
                            <a >

                                <span class="material-icons">
                                    api
</span>

                                <h5 className="title-block">Security and Privacy</h5>

                                <div>NFC proximity identifiers (NFC), GPS tracking, security encryption and digital tokens are leveraged to ensure data privacy and security at the highest levels.</div>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="row">


                    <div className="section-title" >
                        <h3 className="title stripe-accent">Benefits Of Cordonoff Geo-Fence Enforcement.</h3>
                        <br />
                        <br />
                    </div>
                    <div className="collaps-block-para">
                        <p>Cordonoff solution enabled with NFC based digital monitoring helps to flatten the curve and offer the following benefits to government and health agencies:</p>

                    </div><br />

                    <div className="col m12 s12">
                        <div className="icon-boxes-4">


                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Add-User"></i>
                                        <h4>Subject Information </h4>
                                        <p>By tapping their smartphones to the subject’s NFC tag, health workers can learn about their symptoms during isolation, and travel history in real-time.</p>
                                    </div>
                                </div>
                            </a>



                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Coding"></i>
                                        <h4>Self-Empowerment</h4>
                                        <p>Tags can also link to websites or apps that separate fact from fiction and direct the subjected persons to relevant health agencies.</p>
                                    </div>
                                </div>
                            </a>



                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Finger-Print"></i>
                                        <h4>Self-Assistance</h4>
                                        <p>Digitised, step-by-step instructions can be delivered to subjected persons to help ensure self-assistance on symptoms and other diagnostic tools are used correctly.</p>
                                    </div>
                                </div>
                            </a>
                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Loudspeaker"></i>
                                        <h4>Track and Trace</h4>
                                        <p>Health workers and government agencies can use the opt-in track and trace features to address the ongoing risk of disease spread while enabling faster insights on subjet’s movements and quicker corrective measures.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col m12 s12">
                        <div className="icon-boxes-4">


                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Trophy-2"></i>
                                        <h4>Secure Access</h4>
                                        <p>Secure registration links can be provided to subjected persons so they can gain direct access by scanning against their allocated tag.</p>
                                    </div>
                                </div>
                            </a>


                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Line-Chart"></i>
                                        <h4>Authentication</h4>
                                        <p>NFC tags with built-in security features, such as originality signatures or AES encryption with secret keys, can help ensure authenticity and protect the subject’s privacy. </p>
                                    </div>
                                </div>
                            </a>


                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Loudspeaker"></i>
                                        <h4>Detect and Deter Tampering</h4>
                                        <p>A conductive tamper loop in the tag of an on-pack label or inside a closure can irreversibly store an opening detection and communicate the event to an NFC-enabled smartphone, removing doubts about whether one has tampered the tag.</p>
                                    </div>
                                </div>
                            </a>
                            <a className="icon-box-4">
                                <div className="icon-box-4-content">
                                    <div className="icon-box-4-alignment">
                                        <i className="ln ln-icon-Loudspeaker"></i>
                                        <h4>Insights to Health Organisations</h4>
                                        <p>NFC’s ability to collect real-time data and track analytics can be used to show where quarantine violations are taking place while ensuring a high level of privacy and security for any personal data.</p>
                                    </div>
                                </div>
                            </a>


                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col m12 s12">
                        <h3 className="title stripe-accent">Advantages of Cordonoff - Geo-Fence Enforcement.</h3>
                        <br />
                        <br />
                    </div>
                    <div className="collaps-block-para">
                        <p>In the context of controlling the spread of Covid-19, Cordonoff solution can increase productivity, limit exposure of the workforce, and lower costs. It can also increase the speed of response, which modelling shows to be critical to the overall success of controlling the virus spread.</p>
                        <p>Cordonoff system is designed for decentralized proximity logging and supplements centralized monitoring of subjected persons by public health authorities. Proximity logging using NFC and geo-fence tracking addresses a key limitation of manual monitoring process: that it is dependent on a person’s memory and is therefore limited to that a person is acquainted with and remembers having travelled to certain areas. Cordonoff, therefore, enables individual monitoring to be more scalable, real-time and less resource-intensive. </p>
                        <p>The proposed method of digital surveillance offers several key advantages over traditional tracing and monitoring methodologies being used globally.</p>
                    </div>

                    <div className="col m4 s12">
                        <div className="icon-box-3 rounded">
                            <span class="material-icons">
                                perm_identity
                                </span>
                            <h4>Identification</h4>
                            <p>Those afflicted with COVID-19 and their supporters can use Cordonoff to identify subjected persons, entering names into lists, or using digital data to create such lists. On the higher end of the technology spectrum, some countries are using digital data in applications that help automatically identify subjects by GPS or Bluetooth technology.</p>
                        </div>
                    </div>

                    <div className="col m4 s12">
                        <div className="icon-box-3 rounded">
                            <span class="material-icons">
                                notifications_none
                                </span>
                            <h4>Notification</h4>
                            <p>Cordonoff can also be used to notify subjects and generate anonymized mapping to notify the individuals moving out of geo-fenced areas. Cordonoff solution comprises both a smartphone application (Cordonoff Me) and a web application (Cordonoff Web).</p>
                        </div>
                    </div>

                    <div className="col m4 s12">
                        <div className="icon-box-3 rounded">
                            <span class="material-icons">
                                where_to_vote
                                </span>
                            <h4>Monitoring and support</h4>
                            <p>Cordonoff solution can also be used for monitoring any violations to quarantine directives, changes in the symptoms of subjected persons and support daily digital check-ins or compliance monitoring.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col m12 s12">
                        <div className="section-title" >
                            <h3 className="title stripe-accent">How does Cordonoff adhere to privacy guidelines?</h3>
                            <br />
                            <br />
                        </div>
                        <div className="collaps-block-para">
                            <p>Consent can be an integral part of the subjected persons monitoring process for identification and enrolment. Cordonoff is developed with strictly adhering to government data-sharing guidelines, minimizing data collection, and anonymizing and encrypting data to support privacy rights.</p>
                            <p>Data transferred between NFC tags and application are encrypted using strong AES key end-to-end encryption that doesn’t allow any 3rd party applications or websites to trace or reconstruct the data. </p>
                        </div><br />
                        <Collapsable />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}