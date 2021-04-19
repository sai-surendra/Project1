import React, { Component } from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;


export class Collapsable extends Component {
    render() {
        return (
            <Collapse accordion>
                <Panel header="Third-parties cannot use CordonOff communications to track users over time" key="1">
                    <p>A device’s temporary identifier rotates frequently, preventing malicious actors from tracking individual users over time by sniffing for Cordonoff notifications.</p>
                </Panel>
                <Panel header="The Limited collection of personally-identifiable information" key="2">
                    <p>The only personally-identifiable information collected is a phone number, which is securely stored by the health authority.</p>
                </Panel>
                <Panel header="Local storage of location and encounter history" key="3">
                    <p>Each user’s movement and violation history are stored vexclusively on their device. The health authority has access to this history in real-time.</p>
                </Panel>
                <Panel header="Revocable consent" key="4">
                    <p>Health workers have control over their allocated subject’s data. When they withdraw consent, all personally-identifiable data stored at the health authority is deleted. All encounter history will thus cease to be linked to the user.</p>
                </Panel>
            </Collapse>
        )
    }
}

export default Collapsable
