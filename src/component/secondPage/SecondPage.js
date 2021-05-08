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
            <News_flex>
              <Col>
                <em>CCTV IN PROGRAMMER</em>
                <p>this page copy </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem totam natus laborum sequi quod repellat?
                  Tempora recusandae ex aliquid dignissimos molestiae rerum at,
                  perspiciatis fugiat rem quos asperiores veritatis dolorem.
                </p>
              </Col>
              <Col1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.ly
                  sequi Exercitationem totam natus laborum quod repellat? Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit.ly sequi
                  Exercitationem totam natus laborum quod repellat? Tempora
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.ly
                  sequi Exercitationem totam natus laborum quod repellat?
                </p>
              </Col1>
              <Col2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.ly
                  Exercitationem totam natus. Italy Exercitationem totam natus.
                  Exercitationem.
                </p>
                <em>CCTV IN THE UK</em>
                <br />
                <Italy>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                </Italy>
                <h3>with mas Shawon</h3>
              </Col2>
            </News_flex>
          </PageSection>
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
  padding: 40px 40px 0px 40px;
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
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

export const Page_left = styled.div`
  position: relative;
  width: 69.666%;
  margin: 0px 10px 20px 0px;
  img {
    width: 100%;
    /* height: 500px; */
    clip: rect(0px, 60px, 200px, 0px);
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`

export const Page_right = styled.div`
  width: 30.333%;
  margin-bottom: 20px;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`
export const Left_text = styled.div`
  text-align: center;
`
export const Logo = styled.div`
  margin-top: 30px;
  background-color: #ffe4c4;
  width: 100%;
  height: 60px;

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
    @media screen and (max-width: 1134px) {
      padding: 0px 40px;
      left: 40px;
    }
    @media screen and (max-width: 834px) {
      left: 100px;
    }
    @media screen and (max-width: 724px) {
      font-size: 2.6rem;
      padding: 0px 40px;
      left: 70px;
      /* left: 10%; */
    }
    @media screen and (max-width: 632px) {
      font-size: 1.6rem;
      padding: 0px 10px;
      left: 15px;
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
  @media screen and (max-width: 632px) {
    font-size: 2rem;
  }
`
export const Privacy_child = styled.p`
  font-size: 0.8rem;
  padding: 5px;
`
export const News_flex = styled.div`
  display: flex;
  /* padding-bottom: 20px; */
  @media screen and (max-width: 691px) {
    flex-wrap: wrap;
  }
`
export const Col = styled.div`
  padding: 0px 10px 20px 0px;
  text-align: start;
  width: 1000px;
  p {
    letter-spacing: 1px;
    word-spacing: 3px;
  }
  em {
    font-size: 1.4rem;
  }
  p:nth-child(2) {
    margin: 10px 0px;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    color: red;
  }
`
export const Col1 = styled.div`
  padding: 0px 10px 20px 0px;
  text-align: start;
  width: 1000px;

  p {
    letter-spacing: 1px;
    word-spacing: 3px;
  }
`
export const Col2 = styled.div`
  padding: 0px 10px 20px 0px;
  text-align: start;
  width: 1000px;
  em {
    font-size: 1.2rem;
  }
  p {
    letter-spacing: 1px;
    word-spacing: 3px;
  }
`

export const Italy = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`
