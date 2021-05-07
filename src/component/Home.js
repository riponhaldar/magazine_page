import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <>
      <Logo>
        <p>
          <span>M</span>a<span>r</span>v<span>e</span>l
        </p>
      </Logo>
      <Container>
        <Navbar>
          <Code>
            <p>_01</p>
            <img src='./Image/page2.bmp' alt='barCode' />
          </Code>
          <Nav>
            <p>New on Marvel Unlimited</p>
            <p>The Latest| 2019</p>
          </Nav>
          <Web_link>
            <a href='#'>www.marvek.com</a>
            <p>7$</p>
          </Web_link>
        </Navbar>
        <Flex_box>
          <Card>
            <h4>Lorem ipsum </h4>
            <h5>2021| 2May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              velit dolorem vitae iure quam eveniet! Voluptas, vero cum, eveniet
              possimus laboriosam, at aut eaque distinctio quaerat dolorem
              voluptatibus ab minus.
            </p>
          </Card>
          <Card>
            <h4>Lorem ipsum </h4>
            <h5>2021| 2May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              velit dolorem vitae iure quam eveniet! Voluptas, vero cum, eveniet
              possimus laboriosam, at aut eaque distinctio quaerat dolorem
              voluptatibus ab minus.
            </p>
          </Card>
          <Card>
            <h4>Lorem ipsum </h4>
            <h5>2021| 2May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              velit dolorem vitae iure quam eveniet! Voluptas, vero cum, eveniet
              possimus laboriosam, at aut eaque distinctio quaerat dolorem
              voluptatibus ab minus.
            </p>
          </Card>
        </Flex_box>
        <Img>
          <img src='./Image/sadasd.jpg' alt='' />
          <p>Stan Lee - First Work. in Captain America Comics (1941)</p>
        </Img>
      </Container>
    </>
  )
}

export default Home

export const Logo = styled.div`
  justify-content: center;
  text-align: center;
  padding: 10px 0px 20px;

  p {
    font-size: 6rem;
    letter-spacing: 4px;

    font-weight: 900;
    font-family: 'Fjalla One', sans-serif;
  }
  span {
    color: red;
  }
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and(max-width : 991px ) {
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const Navbar = styled.div`
  position: relative;
`
export const Code = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  img {
    width: 90px;
    height: 30px;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  border-top: 2px solid silver;
  padding: 10px;
  p {
    letter-spacing: 3px;
    font-size: 1.1rem;
    font-family: 'PT Sans Narrow', sans-serif;
  }
`
export const Web_link = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 30px;
  border-bottom: 3px solid black;
  a {
    text-decoration: none;
    color: #c0c0c0;
  }
`
export const Flex_box = styled.div`
  display: flex;

  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`
export const Card = styled.div`
  text-align: start;
  padding: 10px 25px;
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    color: #a9a9a9;
  }
  @media screen and (max-width: 991px) {
    padding: 10px 10px;
  }
`
export const Img = styled.div`
  margin-top: 20px;
  img {
    width: 100%;
  }
  p {
    text-align: center;
    position: relative;
    top: -60px;
    background-color: silver;
    padding: 10px;
    font-weight: 800;
    font-family: 'Fjalla One', sans-serif;
    letter-spacing: 2px;
    opacity: 0.4;
  }
`
// export const Logo = styled.div``
