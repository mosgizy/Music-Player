import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import getData from 'utils/Api';

interface AlbumI {
    loading: boolean;
    albums: any[];
    album: any[];
    myCollections: any[];
}

export const fetchAlbums = createAsyncThunk("fetchAlbums", async () => {
    try {
        const response = await getData()
        await new Promise(resolve => setTimeout(resolve, 5000));
        return response.albums;
    } catch (error) {
        console.error(error)
        return []
    }
})

const initialState = {
    loading: true,
    albums: [],
    album: [],
    myCollections:[],
} as AlbumI

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
      setLoader: (state, action:PayloadAction<boolean>) => {
          state.loading = action.payload ? action.payload : true;
      },
      setAlbum: (state, action) => {
          state.albums = action.payload
          state.loading = false
      },
      setMyCollections: (state, action) => {
          state.myCollections = action.payload
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            state.loading = true    
        })
        .addCase(fetchAlbums.fulfilled, (state, { payload }) => {
            state.albums = payload;
            state.loading = false
        })
        .addCase(fetchAlbums.rejected, (state) => {
            state.loading = true
        })
    }
})

// Action creators are generated for each case reducer function
export const { setLoader,setAlbum,setMyCollections } = albumSlice.actions

export default albumSlice.reducer