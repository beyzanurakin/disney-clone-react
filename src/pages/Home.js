import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import Viewers from '../components/Viewers'
import Movies from '../components/Movies'
import db from '../firebase'

//redux
import { useDispatch } from 'react-redux'
import { getMovies } from '../features/movie/movieSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    db.collection('Movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(getMovies(tempMovies))
    })
  }, [])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
