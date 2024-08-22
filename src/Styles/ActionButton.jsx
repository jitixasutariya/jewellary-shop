import styled from "styled-components";

export const ActionButton = styled.button`
  padding: 12px 35px; /* Adds space inside the button */
  background-color: rgb(255, 134, 0); /* Example background color */
  color: white; /* Example text color */
  border: 1px solid #ddd; /* Removes the default border */
  border-radius: 6px; /* Adds rounded corners */
  cursor: pointer; /* Changes cursor to pointer on hover */
  font-size: 20px; /* Example font size */
  font-weight: "800";
  transition: background-color 0.3s ease; /* Smooth transition for background color */

  &:hover {
    background-color: #ffbf00; /* Darker background color on hover */
  }
`;
