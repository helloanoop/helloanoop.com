import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    border-bottom: solid 1px #e8e8e8;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    font-size: 1rem;
    font-family: 'Source Serif 4', Georgia, serif;
    letter-spacing: normal;

    .anoop {
      font-size: 1.5rem;
    }

    nav {
      a {
        margin-left: 1rem;

        &.active {
          font-weight: 600;
        }
      }
    }
  }
`;

export default Wrapper;
