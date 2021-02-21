import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton, Menu, MenuItem, Button} from "@material-ui/core";
import { IUserInfoSelectProps } from './user-info-selector.model';
import {useStylesUserSelectInfo} from './user-info-select.style'
import {noImage} from '../../constants/img.const'
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export const UserInfoSelect:React.FC<IUserInfoSelectProps> = ({zIndexMenu= 1300,userImg=noImage,singOut}) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const cl = useStylesUserSelectInfo();

    const [t] = useTranslation();
    
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                style={{zIndex: zIndexMenu}}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem >
                    <Link  to="/admin/profile" className={cl.userInfoLink}>
                            <img src={userImg} alt="user img" className={cl.userInfoLinkImg}/>
                            <span className={cl.userInfoLinkTitle}> 
                               {t("user.profile")}
                            </span>
                    </Link>
                </MenuItem>
                <MenuItem 
                    classes={{
                        gutters: cl.MenuItemGutters
                    }}
                >
                    <Button variant="contained" color="primary" onClick={()=>{singOut()}}>
                        {t("btn.sing-out")}
                    </Button>
                </MenuItem>
            </Menu>
        </>
    )
}