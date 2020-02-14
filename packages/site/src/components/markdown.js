import styled from 'styled-components';

export const Markdown = styled.article`
  width: 60vw;
  @media (max-width: 768px) {
    width: 75vw;
  }
  & h1 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 3.4rem;
    margin: 0 0 2rem;

    @media (min-width: 1024px) {
      font-size: 4.8rem;
    }

    @media (max-width: 768px) {
      margin: 6rem 0 2rem;
    }
  }

  & h2 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 2.8rem;
    margin: 6rem 0 2rem;
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  & h3 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.8rem;
    margin: 2rem 0;
    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  & table {
    border-collapse: collapse;
  }

  & td {
    height: 50px;
    text-align: left;
  }

  & td,
  th {
    padding: 15px;
  }

  & th {
    text-align: center;
  }

  & table,
  th,
  td {
    font-size: 1.7rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    border: 1px solid lightgrey;
  }

  & pre {
    line-height: 2rem;
    background-color: #efefef;
    padding: 2rem;
    color: #333;
  }

  & pre code {
    color: #333;
  }

  & p {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.7rem;
    line-height: 1.6;
  }

  & p code {
    border: 1px solid lightgrey;
    opacity: 0.8;
    padding: 0.5rem;
    font-size: 1.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }

  & div.gatsby-highlight {
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  & blockquote {
    margin: 0 0.2rem;
    padding: 0 1.8rem;
    border-left: 3px solid #255db0;
  }

  & li {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.7rem;
    line-height: 1.6;
    padding: 0.5rem;
    @media (max-width: 768px) {
      margin-left: -2rem;
    }
  }

  & li code {
    border: 1px solid lightgrey;
    opacity: 0.8;
    padding: 0.5rem;
    font-size: 1.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }

  & a {
    color: #895160;

    &:target {
      display: block;
      position: relative;
      top: -60px;
      visibility: hidden;
    }
    &:hover {
      color: black;
    }
  }
`;
