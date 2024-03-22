import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVedio: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;

        },
        addTrailerVedio : (state, action)=>{
            state.trailerVedio = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTrailerVedio } = moviesSlice.actions;
export default moviesSlice.reducer