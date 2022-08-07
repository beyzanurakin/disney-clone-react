import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from '../firebase'

import { useParams } from 'react-router-dom'

function Details() {
  const { id } = useParams()
  console.log(id)
  //useState is a redux for individials components
  const [movie, setMovie] = useState()

  useEffect(() => {
    //grab movie detail
    db.collection('Movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the data
          setMovie(doc.data())
        } else {
          //redirect to homepge
        }
      })
  }, [id])
  console.log(movie)

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.BackgroundImg} alt={movie.Title} />
          </Background>
          <ImgTitle>
            <img src={movie.TitleImg} alt={movie.Title} />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src='/images/play-icon-black.png' alt='play-button' />
              <span>play</span>
            </PlayButton>
            <TrailerButton>
              <img src='/images/play-icon-white.png' alt='trailer-button' />
              <span>trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src='/images/group-icon.png' alt='add-to-group-button' />
            </GroupWatchButton>
          </Controls>
          <Subtitle>{movie.Genres}</Subtitle>
          <Description>{movie.Description}</Description>
        </>
      )}
    </Container>
  )
}

export default Details
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
  }
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: #0063e5;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`
const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`
