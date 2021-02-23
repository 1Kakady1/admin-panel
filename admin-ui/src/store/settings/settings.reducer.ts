import { createSlice } from '@reduxjs/toolkit'
import { SETTINGS_KEY } from './settings.const';
import {userInit} from './settings.init'
import {ISettings} from './settings.model'

const initAction = (state:ISettings, {payload}:{payload: boolean})=>{
  state.isInit = payload
}

export const settingsSlice = createSlice({
  name:  SETTINGS_KEY,
  initialState: userInit,
  reducers: {
    initAction
  }

})

export const toSettingsActions = {
  ...settingsSlice.actions,
};