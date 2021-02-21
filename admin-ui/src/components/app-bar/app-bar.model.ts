export interface IAppBarProps {
    zIndexBar?: number,
    menuActive: boolean,
    title?: string,
    menuOpen: ()=>void,
    menuClose: ()=>void
}