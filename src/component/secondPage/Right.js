import React from 'react'

import styled from 'styled-components'
const Right = () => {
  return (
    <>
      <Right_container>
        <Tag>
          <Issue>
            <em>ISSUE</em>
            <p>28FEB/21</p>
          </Issue>
          <One>#1</One>
        </Tag>
        <Author>
          <p>
            <em>Editor :</em>Mack Your <br />
            <em>News Editor :</em> Miku Yesh <br />
            <em>Feacturs Editor :</em> Milasc Goldin <br />
            <em>S.Media Officer:</em>Siral Breassr
          </p>
        </Author>
        <Code>
          <img src='./Image/qr.png' alt='' />
          <p>
            ONLINE <br /> EDITION <br /> & <br /> BLOG
          </p>
        </Code>
        <Social>
          <HasTag>
            <p>t</p>
            <em>@SHRPBmllin</em>
          </HasTag>
          <Emial>
            <h5>bullin@uksc.com</h5>
          </Emial>
          <Black>
            <p>
              UCL <br />
              Lorem ipsum dolor sit amet.
            </p>
          </Black>
        </Social>
        <Hedding>
          <Para>
            <em>ECHAR RULES AGAINST ITALY</em>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              illo fuga officiis soluta obcaecati quas.... <a href='#'>more</a>
            </p>
          </Para>
          <Para>
            <em>APPLE's SWEATSHOP FACTORIES</em>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              illo fuga officiisadipisicing elit. soluta obcaecati quas....
              <a href='#'>more</a>
            </p>
          </Para>
          <Para>
            <em>TORTURE IN SIMAL</em>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.soluta
              obcaecati quas.... <a href='#'>more</a>
            </p>
          </Para>
        </Hedding>
      </Right_container>
    </>
  )
}

export default Right
export const Right_container = styled.div`
  padding: 0px 20px 0px 10px;
`
export const Tag = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`
export const Issue = styled.div`
  em {
    font-size: 2rem;
  }
`
export const One = styled.p`
  font-size: 2.9rem;
  padding-left: 10px;
`
export const Author = styled.div`
  padding: 5px 0px;
  border-bottom: 2px solid #000;
  em {
    font-weight: bold;
  }
  p {
    font-size: 0.9rem;
    font-style: italic;
  }
`
export const Code = styled.div`
  padding: 5px 0px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  img {
    width: 100%;
    padding-right: 10px;
  }
  p {
    padding: 5px 5px;
    text-align: center;
    font-style: italic;
    font-weight: 400;
  }
`
export const Social = styled.div`
  padding: 5px;
  border-bottom: 2px solid #000;
`
export const HasTag = styled.div`
  display: flex;
  justify-content: center;

  em {
    font-weight: 600;
    font-family: 'PT Sans Narrow', sans-serif;
  }
  p {
    font-weight: bolder;
    text-align: center;
    font-family: 'Merriweather', serif;
    padding-right: 10px;
  }
`
export const Emial = styled.div`
  justify-content: center;
  text-align: center;
  border-bottom: 2px solid #000;

  border-top: 1px solid #000;
  h5 {
    padding: 5px;
  }
`
export const Black = styled.div`
  background-color: black;

  margin-top: 5px;

  color: #fff;
  p {
    position: relative;
    left: 10px;
    padding: 10px 0px;
  }
`
export const Hedding = styled.div`
  padding: 20px 40px 0px 0px;
`
export const Para = styled.div`
  border-bottom: 2px solid #000;
  padding: 20px 0px;

  em {
    font-weight: 500;
    font-size: 1.5rem;
  }
  p {
    padding-top: 15px;
    font-size: 1.1rem;
  }
  a {
    text-decoration: none;
    color: #a9a9a9;
  }
`
