import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {trackI} from '../../resources/interface/trackInterface'

const initialState = {
    audioUrl: "",
    image: "",
    name: "",
    title: "",
    tracks: [],
    trackId: "",
    play: false,
    repeatTrack: false,
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
            state.trackId = action.payload.trackId
        },
        setTrackList: (state, action) => {
            state.tracks = action.payload
        },
        changeTrack: (state, action) => { 
            state.audioUrl = action.payload.audioUrl
            state.title = action.payload.title
            state.trackId = action.payload.trackId
        },
        setPlaying: (state, action) => { 
            state.play = action.payload
        },
        setRepeatTrack: (state, action) => { 
            state.repeatTrack = action.payload
        }
    }
})

export const { setTrack,setTrackList,changeTrack,setPlaying,setRepeatTrack } = trackSlice.actions

export default trackSlice.reducer