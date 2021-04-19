import React, { Fragment, useState } from 'react'

export default function Viewmore({ children }) {
    const [visible, setVisible] = useState(false)
    return (
        <Fragment>
            <div className="row mb0">
                <div className="col m12 s12">
                    <div className="read--more"><h6 className="mb0 animated-arrow" onClick={() => setVisible(true)}><b>READ MORE</b> <span class="material-icons">arrow_right_alt</span></h6></div>
                   {visible && <div className="model--popup">
                        <div className="row text-right">
                            <div className="close--btn" onClick={() => setVisible(false)}><span class="material-icons" style={{ fontSize: '38px', color: 'tomato' }}>highlight_off</span></div>
                        </div>
                        {children}
                    </div>}
                    </div>
            </div>
        </Fragment>
    )
}