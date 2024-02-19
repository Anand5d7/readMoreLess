// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 30vw;
  padding: 30px;
  padding-top: 50px;
  @media screen and (min-width: 768px) {
    width: 60vw;
    align-items: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 1px #334155;
  height: 90vh;
  width: 24vw;
  padding: 30px;
  @media screen and (min-width: 768px) {
    width: 45vw;
  }
`
export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  padding-bottom: 20px;
  font-weight: bold;
  margin: 0px;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
export const Para = styled.p`
  color: #334155;
  font-family: 'Roboto';
  padding-bottom: 20px;
  font-size: 16px;
  margin: 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
export const Image = styled.img`
  height: 200px;
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 490px;
    height: 280px;
    align-self: center;
  }
`
export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    align-self: center;
    padding-left: 70px;
  }
`
export const Button = styled.button`
  background-color: #1f81ff;
  height: 30px;
  width: 100px;
  align-self: flex-start;
  color: #ffffff;
  font-family: 'Rpboto';
  font-size: 15px;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
