import React from 'react'
import {SlideDown} from 'react-slidedown'

export const Dropdown = React.memo(({open,children}:{open: boolean,children: JSX.Element }) => {
    return (
        <div className={'cl.dropdownWrapper'}>
            <SlideDown className={'my-dropdown-slidedown'}>
                {open ? children : null}
            </SlideDown> 
        </div>
    )
})