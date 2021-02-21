import React,{useState} from 'react'
import {SlideDown} from 'react-slidedown'
import clsx from 'clsx';
import 'react-slidedown/lib/slidedown.css'
import {useStylesDropdown } from './dropdown.style'
import {IDropdown} from './dropdown.model'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ListItemIcon } from '@material-ui/core';
 
export const Dropdown = ({open=false,children,title,icon=null,callBack}: IDropdown) => {
    const cl = useStylesDropdown();
    const [openState,toggleOpen]= useState<boolean>(open);
    const dropdownToggele = ()=>{
        callBack && callBack();
        toggleOpen(!openState)
    }

    return (
        <div className={cl.dropdownWrapper}>

            <div className={cl.dropdownButton} onClick={dropdownToggele}>
                <div className={cl.dropdownTitleWrap}>
                    {!!!!icon && icon }
                    <span className={cl.dropdownTitle}>
                        {title}
                    </span>
                </div>

                <div className={
                    //cl.dropdownArrow
                    clsx(cl.dropdownArrow,{
                        [cl.dropdownOpen]: openState,
                        [cl.dropdownClose]: !openState,
                      })
                    }>
                        <ArrowForwardIosIcon />
                </div>
            </div>

            <SlideDown className={'my-dropdown-slidedown'}>
                {openState ? children : null}
            </SlideDown> 
        </div>

    )
}