import React from "react"
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {useStylesAppBar} from "./app-bar.style"
import {IAppBarProps} from "./app-bar.model"
import {ChangeLang} from '../../i18n/components/i18n-change.component'
import {UserInfoSelectContainer} from '../user-info-select/user-info-select.container'


export const AppBarMenu:React.FC<IAppBarProps> = ({zIndexBar=1301,menuActive,title="Admin",menuOpen,menuClose}) =>{

    const cl = useStylesAppBar();
    
    return(
        <AppBar position="fixed" 
                style={{zIndex: zIndexBar}}
            >
                <Toolbar>
                <IconButton edge="start" className={cl.menuButton} color="inherit" aria-label="menu" onClick={()=>{
                    menuActive ? menuClose():menuOpen();
                }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={cl.title}>
                    {title}
                </Typography>
                <div className={cl.rightWrap}>
                    <div className="lang" style={{zIndex: zIndexBar}}>
                        <ChangeLang />
                    </div>
                    <UserInfoSelectContainer
                        zIndexMenu={1301}
                    />
                </div>
                </Toolbar>
            </AppBar>
    )
}