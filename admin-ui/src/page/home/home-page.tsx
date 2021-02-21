import React,{useState} from "react"
import {ContainerPageDefault} from '../../components/container-page-default/container-page-default.component'
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from 'uuid';
import {SliderContainer} from "../../components/slider-container/slider-container.component"
import {ICardData} from "../../components/card-info-mini/card-info-mini.model"
import {CardInfoMini} from '../../components/card-info-mini/card-info-mini.component'
import {CardInfoMiniSkeleton} from "../../components/card-info-mini/cart-info-mimi.skeleton"
import { Typography } from "@material-ui/core";

import {AsideContainer} from "../../components/aside/aside-container/aside-container.component"
import { AsideHeader } from "../../components/aside/aside-header/aside-header.component";

export const Home = ({name}:{name: string}) =>{
   
    const [t] = useTranslation();
    const [isLoad,setToggleLoad] = useState<boolean>(true);
    const [data,setData] = useState<ICardData|null>(null);
    const [show, setShow] = useState<boolean>(false);

    const closeModal = () =>{
        setShow(false)
    }

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('admin.page.home.title')}</title>
            </Helmet>
            <ContainerPageDefault
                appBarTitle={t('admin.appbar-title.home')+" "+name +"!"}
            >
                    <Typography variant="h4" gutterBottom>
                        New product:
                    </Typography>



                    <AsideContainer
                        open={show}
                        classAnimation={"slide-modal"}
                    >
                        <AsideHeader 
                            title="title"
                            close={closeModal}
                        />
                    </AsideContainer>

                    <SliderContainer key={uuidv4()}
                                options={{
                                    arrowsInclude: true,
                                    autoplay: false,
                                    slidesToShow: 4
                                }}
                            >

                                {
                                    data !== null ?
                                        data.rows.map((item:any)=><CardInfoMini key={uuidv4()} link={`admin/products/${item.id}`} title={item.title} desc={item.desc} preview={item.preview} titleBtn={t("admin.btn.more")}/>)
                                    :
                                        [1,2,3,4].map(item=><CardInfoMiniSkeleton key={uuidv4()} />)
                                }

                            </SliderContainer>
            </ContainerPageDefault>  
        </>
    )
}
