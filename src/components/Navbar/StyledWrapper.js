import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    transition-property: opacity;
    transition-duration: .4s;
    opacity: .4;

    &:hover {
      opacity: 1;
    }

    .anoop {
      font-size: 1.6rem;
    }

    nav {
      a {
        margin-left: 1rem;
      }
    }
  }
`;

export default Wrapper;
