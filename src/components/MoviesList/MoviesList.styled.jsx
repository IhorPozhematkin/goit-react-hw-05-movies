import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 500px;
`;

export const LinkItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  align-content: center;
  margin: 0 auto;
  width: 200px;
  height: 280px;
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 100%;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Rating = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${({ $color }) => $color};
  color: white;
`;
