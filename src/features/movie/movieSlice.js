import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload
    },
  },
})

export const { getMovies } = movieSlice.actions
//useSelector ün içine yazacağımız şey
export const selectMovies = (state) => state.movie.movies

export default movieSlice.reducer
