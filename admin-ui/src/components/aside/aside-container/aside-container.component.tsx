import React from 'react'
import { CSSTransition } from 'react-transition-group';
import {useStylesAsideContainer} from "./aside-container.style"

interface IAsideContainerProps {
    children: React.ReactNode,
    timeout?: number,
    classAnimation: string,
    open?: boolean,
    transitionFunction?: ITransitionProps
}

interface ITransitionProps {
    onEnter: ()=> void,
    onExited: ()=> void,
}

export const AsideContainer:React.FC<IAsideContainerProps> = ({children,classAnimation,timeout=300,open=false,transitionFunction={}}) =>{
    const cl = useStylesAsideContainer();
    return(
        <CSSTransition
            in={open}
            timeout={timeout}
            classNames={classAnimation}
            unmountOnExit
            {...transitionFunction}
        >
            <>
                <div className={cl.aside}>
                    {children}
                </div>
                <div className={cl.asideOverlay}></div>
            </>
        </CSSTransition>

    )
}