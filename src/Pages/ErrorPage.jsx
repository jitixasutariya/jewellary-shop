import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>404 Page</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the home
          page.
        </p>
        <Button>
          <NavLink to={"/"}>Goto Back Home</NavLink>
        </Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 3rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
