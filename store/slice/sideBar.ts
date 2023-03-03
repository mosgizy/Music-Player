import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SideBarState {
  active: boolean
}

const initialState: SideBarState = {
  active: false,
}

export const sideBar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
      activeSideBar: (state,action:PayloadAction<boolean>) => {
          state.active = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { activeSideBar } = sideBar.actions

export default sideBar.reducer