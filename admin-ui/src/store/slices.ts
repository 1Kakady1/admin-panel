import { settingsSlice } from './settings/settings.reducer'
import {userSlice} from './user/user.reducer'
export const slices = {
  [userSlice.name]: userSlice.reducer,
  [settingsSlice.name]: settingsSlice.reducer,
}