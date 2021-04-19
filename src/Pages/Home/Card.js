import React, { Fragment } from 'react'

export default function Card({title, children, color}) {
    return <Fragment>
        <div className={`card--view ${color}`}>
             {children}
            
        </div>
    </Fragment>
}