import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp>get all there</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          debitis tenetur harum, beatae sed nostrum iusto assumenda expedita
          dignissimos dolores minima, totam fugiat qui quasi a incidunt illo
          neque amet.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display:flex;
  align-items:top;
  justify-content:center;
  

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity:0.8;
    z-index:-1;

    background-position: top;
    background-size; cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
  }
`
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`

const CTALogoOne = styled.img``
const CTALogoTwo = styled.img`
  width: 90%;
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
