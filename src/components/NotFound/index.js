import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const NotFoundHeading = styled.h1`
  font-size: 5rem;
  color: #333;
`;

const NotFoundSubheading = styled.h2`
  font-size: 2rem;
  color: #555;
  margin: 1rem 0;
`;

const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const NotFoundLink = styled.a`
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  margin-top: 1rem;
  background-color: #5900d0;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #5900d0;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404</NotFoundHeading>
      <NotFoundSubheading>Page Not Found</NotFoundSubheading>
      <NotFoundMessage>
        The page you are looking for does not exist.
      </NotFoundMessage>
      <NotFoundLink href="/">Go back to homepage</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
