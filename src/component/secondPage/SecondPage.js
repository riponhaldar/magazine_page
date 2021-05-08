import React from 'react'

import styled from 'styled-components'
import Right from './Right'
const SecondPage = () => {
  return (
    <>
      <div className='container'>
        <Container_Body>
          <PageSection>
            <Page_row>
              <Page_left>
                <Left_text>
                  <h4>-2021-</h4>
                  <Logo></Logo>
                  <Logo_text>
                    <p>
                      STUDENT <br /> HUMAN RIGHTS <br /> PROGRAM
                    </p>
                  </Logo_text>
                  <Privacy>
                    <Privacy_text>PRIVACY</Privacy_text>
                    <Privacy_child>THE FIGHT FOT PRIVACY</Privacy_child>
                  </Privacy>
                </Left_text>
                <img src='./Image/cctv.png' alt='' />
              </Page_left>

              <Page_right>
                <Right />
              </Page_right>
            </Page_row>
          </PageSection>
          s
        </Container_Body>
      </div>
    </>
  )
}

export default SecondPage

export const Container_Body = styled.div`
  margin: 0;
  background-color: #fdf2e8;
`

export const PageSection = styled.div`
  /* padding-top: 40px; */
  padding: 40px 40px;
  position: relative;
  width: 100%;
  h4 {
    z-index: 1;

    text-align: center;
    font-size: 1.4rem;
    font-family: 'PT Sans Narrow', sans-serif;
  }
`

export const Page_row = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;
  @media screen and (max-width: 692px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

export const Page_left = styled.div`
  position: relative;
  width: 69.666%;
  margin: 0px 10px 60px 0px;
  img {
    width: 100%;
    /* height: 500px; */
    clip: rect(0px, 60px, 200px, 0px);
  }
`

export const Page_right = styled.div`
  width: 30.333%;
`
export const Left_text = styled.div`
  text-align: center;
`
export const Logo = styled.div`
  margin-top: 30px;
  background-color: #ffe4c4;
  width: 100%;
  height: 60px;
  /* font-size: 3rem;

  border-bottom: 1px solid black;
  border-top: 1px solid black;
  text-align: center;
  margin: 0px 50px;
  z-index: ; */
  /* transform: rotate(-20deg); */
  /* -moz-transform: rotate(-20deg); */

  &::after {
    content: 'THE BULLETIN';
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    transform: rotate(-15deg);
    padding: 0px 60px;
    left: 100px;
    position: absolute;
    @media screen and (max-width: 992px) {
      font-size: 3rem;
      font-weight: 600;
      /* text-align: center; */
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      transform: rotate(-15deg);
      padding: 0px 40px;
      left: 50px;
      position: absolute;
    }
  }
`

export const Logo_text = styled.div`
  text-align: center;
  padding-top: 40px;
  font-weight: 600;
  font-size: 0.8rem;
  padding-bottom: 20px;
  @media screen and (max-width: 992px) {
    padding-top: 30px;
    font-size: 0.8rem;
  }
`
export const Privacy = styled.div`
  border-top: 1px solid black;
`
export const Privacy_text = styled.p`
  font-size: 3.4rem;
  padding-top: 10px;
  letter-spacing: 8px;
`
export const Privacy_child = styled.p`
  font-size: 0.8rem;
  padding: 10px;
`
