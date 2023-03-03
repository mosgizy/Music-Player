import { configureStore } from '@reduxjs/toolkit'
import sideBar from './slice/sideBar'
import albumSlice from './slice/Album'
import trackSlice  from './slice/track'

export const store = configureStore({
    reducer: {
      sidebar: sideBar,
      albumSlice: albumSlice,
      trackSlice:trackSlice
    },
    devTools:true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type RootStore = ReturnType<typeof store.makeStore>