'use client'

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const Btn = styled.div`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(90deg, #42F092 0%, #42F092 0.01%, #42B1F0 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: Itim;
  cursor: pointer;
  &:hover {
    color: black;
    border-radius: 10px;
    border: 2px solid #42F092;
    background: rgba(217, 217, 217, 0.00);
  }
`
export default function Naverbtn() {
  let router = useRouter();

  return(
    <Btn>검색</Btn>
  )
}