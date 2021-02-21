import React from "react"
import {useStylesContainer} from "./container-page-default.style"
import {DrawlerMenu} from '../drawler/drawler.component'
import {AppBarMenu} from '../app-bar/app-bar.component'
import {IContainerProps} from "./container-page-default.model"

export const ContainerPageDefault:React.FC<IContainerProps> = ({children,appBarTitle="Admin"}) =>{
    const cl = useStylesContainer();

    const [open, setOpen] = React.useState<boolean>(false);
    
     const handleOpen = () => {
        setOpen(true);
     };
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className={cl.root}>
            
            <AppBarMenu
                menuActive={open}
                menuClose={handleClose}
                menuOpen={handleOpen}
                title={appBarTitle}
            />

            <DrawlerMenu
                open={open}
                callBackDrawlerOpen={handleOpen}
            />

            <main className={cl.contentWrap}>
                <div className={cl.content}>
                    {children}
                </div>
            </main>
        </div>
    )
}
