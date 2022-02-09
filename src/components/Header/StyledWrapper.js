import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    border-bottom: solid 1px #e8e8e8;
    max-width: 640px;
    margin: 0 auto;

    .anoop {
      font-size: 1.6rem;
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
