import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon,Toolbar } from "@material-ui/core";
import {Link} from 'react-router-dom'
import clsx from 'clsx';
import {useStylesDrawler} from './drawler.style'
import {IDrawlerProps} from "./drawler.model"
import DescriptionIcon from '@material-ui/icons/Description';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ViewListIcon from '@material-ui/icons/ViewList';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Dropdown} from '../dropdown/dropdown.component'
import { useTranslation } from 'react-i18next';

export const DrawlerMenu = ({open,callBackDrawlerOpen=undefined}:IDrawlerProps):JSX.Element =>{
    const cl = useStylesDrawler();
    const [t] = useTranslation();
    return(
        <Drawer
                variant="permanent"
                className={clsx(cl.drawer, {
                    [cl.drawerOpen]: open,
                    [cl.drawerClose]: !open,
                  })}
                classes={{
                    paper: clsx({
                      [cl.drawerOpen]: open,
                      [cl.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar />
                <div className={cl.drawerContainer}>
                    <List>
                        <ListItem button key={"posts"} className={cl.dropdownWrapper}>

                            <Dropdown
                                icon={
                                    <ListItemIcon >
                                        <DescriptionIcon />
                                    </ListItemIcon>
                                }
                                title={t('admin.post')}
                                callBack={callBackDrawlerOpen}
                            >
                                <Link className={cl.drawlerLink} to="admin/posts">
                                     <ListItemIcon >
                                        <ListAltIcon/>
                                     </ListItemIcon>
                                    <h1>{t('admin.post.all')}</h1>
                                </Link>
                                <Link className={cl.drawlerLink} to="/admin/create/post">
                                    <ListItemIcon >
                                        <PostAddIcon/>
                                     </ListItemIcon>
                                    <h1>{t('admin.post.create')}</h1>
                                </Link>
                                
                            </Dropdown>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={"products"} className={cl.dropdownWrapper}>
                            <Dropdown
                                icon={
                                    <ListItemIcon >
                                        <ShoppingBasketIcon />
                                    </ListItemIcon>
                                }
                                title={t('admin.product')}
                                callBack={callBackDrawlerOpen}
                            >
                                <Link className={cl.drawlerLink} to="admin/products">
                                     <ListItemIcon >
                                        <ViewListIcon/>
                                     </ListItemIcon>
                                    <h1>{t('admin.product.all')}</h1>
                                </Link>
                                <Link className={cl.drawlerLink} to="/admin/products/create">
                                    <ListItemIcon >
                                        <AddCircleIcon/>
                                     </ListItemIcon>
                                    <h1>{t('admin.product.create')}</h1>
                                </Link>
                                
                            </Dropdown>
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>
    );
}