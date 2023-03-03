import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {trackI} from '../../resources/interface/trackInterface'

const initialState = {
    audioUrl: "",
    image: "",
    name: "",
    title: "",
    tracks: [],
    trackChanged:false,
} as trackI

export const trackSlice = createSlice({
    name: "trackSlice",
    initialState,
    reducers: {
        setTrack: (state, action: PayloadAction<trackI>) => {
            state.audioUrl = action.payload.audioUrl
            state.image = action.payload.image
            state.name = action.payload.name
            state.title = action.payload.title
            state.trackChanged = true
        },
        setTrackList: (state, action) => {
            state.tracks = action.payload
        },
        changeTrack: (state, action) => { 
            state.audioUrl = action.payload.audioUrl
            state.title = action.payload.title
            state.trackChanged = true
        }
    }
})

export const { setTrack,setTrackList,changeTrack } = trackSlice.actions

export default trackSlice.reducer