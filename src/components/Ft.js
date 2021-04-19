import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


export function Slider({ title, reg }) {

    return <Fragment>
        <div className="dashboard content__main">
            <h3>{title}</h3>
            {reg ? <Link to={`/registraion/${1}`}><button type="button" className="btn css-gmawut">Register
                <span class="material-icons">arrow_right_alt</span>
            </button></Link> : <Link to={`/my-dashboard/${1}`}>
                    <button type="button" className="btn css-gmawut"> <span class="material-icons">keyboard_backspace</span> Back to List

            </button></Link>}
        </div>
        <br />
    </Fragment>
}

export default function HeroSlider({ img, title, alt, children }) {
    return <Fragment>
         {/* style={{ backgroundImage: `url(${window.innerWidth > 600 ? img : ''})` }} */}
        <div className="figure">
        {/* {window.innerWidth > 600 && <><img src={img}/></>}
            {window.innerWidth < 600 && <><img src={alt}/>
            <div className="hero--title"> {children}
            </div>
            </>} */}
           {/* {window.innerWidth > 600 ?<><img src={img}/></> : <><img src={alt}/><div className="hero--title"> {children}
            </div></>} */}
            <div className="bg-device">
                <><img src={img} /></>
            </div>
            <div className="bg-mobile">
                <><img className="mobile-bg-width" src={alt} /><div className="hero--title"> {children}</div></>
            </div>
            <div className="layer"></div> 
        </div>
    </Fragment>
}


export function Title({ title }) {
    return <Fragment>
        <h5>{title}</h5>
        <div class="glbNew-strp_sprt"></div>
    </Fragment>
}