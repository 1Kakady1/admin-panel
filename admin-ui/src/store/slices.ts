import {userSlice} from './user/user.reducer'
export const slices = {
  [userSlice.name]: userSlice.reducer
}