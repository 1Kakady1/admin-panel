import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import {useStylesCardInfoMini} from './card-info-mini.style'
import { v4 as uuidv4 } from 'uuid';
export const CardInfoMiniSkeleton = () =>{
    const cl = useStylesCardInfoMini();
    return(
        <div className={cl.cardInfoMiniItem}>
            <div className={cl.cardInfoMiniHeader}>
                <Skeleton className={cl.cardInfoMiniImg}  animation="wave"  style={{width: 60, height: 80,borderRadius: '100%', marginBottom: 6 }} /> 
                <div className="title-warp" style={{ display: 'flex', flexDirection:'column', width: '90%' }}>
                    <Skeleton className={cl.cardInfoMiniTitle}  animation="wave" height={10}  style={{ width: '93%',marginBottom: 6 }} />
                    <Skeleton className={cl.cardInfoMiniTitle}  animation="wave" height={10}  style={{ width: '93%',marginBottom: 6 }} /> 
                    <Skeleton className={cl.cardInfoMiniTitle}  animation="wave" height={10}  style={{ width: '93%',marginBottom: 6 }} />   
                </div>

            </div>
            <div className={cl.cardInfoMiniDesc}>
                {
                    [1,2,3,4,5,6,7,8,9,10,11].map((item:number)=>{
                        return <Skeleton key={uuidv4()}  animation="wave" height={10} style={{ marginBottom: 6 }} /> 
                    })
                }
            </div>
            
             <Skeleton animation="wave" style={{ 
                 marginBottom: 6,
                 paddingTop: 10,
                 paddingLeft: 10,
                 paddingRight: 10,
                 paddingBottom: 10,
                 minWidth: 82,
                 width: 82,
                 position: 'absolute',
                 bottom: 10,
                 right: 20,

            }} /> 
        </div>
    )
}