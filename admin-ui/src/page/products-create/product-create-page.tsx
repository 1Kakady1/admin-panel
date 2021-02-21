import React,{useEffect,useState} from "react"
import {ContainerPageDefault} from '../../components/container-page-default/container-page-default.component'
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from 'uuid';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {translit} from "../../helpers/translit"
// https://react-dropzone.js.org/ https://www.npmjs.com/package/react-dropzone
export const ProductCreate = () =>{

    const [t] = useTranslation();

    useEffect(()=>{
        console.log("---->", translit("привет как дела"))
    },[])

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{t('admin.page.product.create.title')}</title>
            </Helmet>

            <ContainerPageDefault
                appBarTitle={t('admin.page.product.create.title')}
            >
            <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                    <Editor editorState={editorState} onEditorStateChange={setEditorState} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <h1>dawdaw</h1>
                </Grid>
            </Grid>
            
            </ContainerPageDefault>  

        </>
    )
}
