import React from "react";
import {
  Container,
  MainContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  FormContainer,
} from "./style";
import Spinner from "../../components/Spinner";

const ApplyPage = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingSubContainer>
            <HeadingText>Apply</HeadingText>
            <Circle />
          </HeadingSubContainer>
        </HeadingContainer>
        <FormContainer>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScdVkTVdiDTjzgBMj7hJg-hAqO-GcJ5PzVkFfEhF-k1b0R16A/viewform?embedded=true"
            width="640"
            height="1265"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            <Spinner />
          </iframe>
        </FormContainer>
      </Container>
    </MainContainer>
  );
};

export default ApplyPage;
