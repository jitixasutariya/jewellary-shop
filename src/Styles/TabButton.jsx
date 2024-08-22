import styled, { keyframes } from "styled-components";

// Define shadow lift animation keyframes
const shadowLift = keyframes`
  0% {
    transform: translateY(0);
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    transform: translateY(-5px);
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const TabButton = styled.button`
  background-color: rgb(255, 134, 0);
  color: #fff;
  border: none;
  padding: 15px 25px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden; /* Hide overflow to ensure animation is visible */
  position: relative; /* Set position to relative to handle child absolute positioning */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffbf00;

    & span {
      display: inline-block;
      animation: ${shadowLift} 0.3s forwards; /* Apply the shadow lift animation */
    }
  }

  /* Responsive styles */
  @media (max-width: 1440px) {
    padding: 14px 22px;
    font-size: 1.15rem;
  }

  @media (max-width: 1200px) {
    padding: 12px 20px;
    font-size: 1.1rem;
  }

  @media (max-width: 992px) {
    padding: 10px 15px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    padding: 5px 8px;
    font-size: 0.7rem;
  }

  @media (max-width: 320px) {
    padding: 4px 6px;
    font-size: 0.6rem;
  }
`;
