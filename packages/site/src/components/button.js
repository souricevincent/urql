import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${props => (props.light ? 'white' : '#202020')};
  color: ${props => (props.light ? '#202020' : 'white')};
  display: block;
  font-size: 1.5rem;
  height: 4rem;
  letter-spacing: 0.05em;
  line-height: 4rem;
  margin: ${props => (props.noMargin ? '0' : '5rem auto 3rem')};
  max-width: 21rem;
  min-width: 10rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.4s;
  width: 100%;
  &:hover {
    background: ${props => (props.light ? '#f6f6f6' : '#333')};
  }
  &:active {
    opacity: 0.6;
  }
`;
