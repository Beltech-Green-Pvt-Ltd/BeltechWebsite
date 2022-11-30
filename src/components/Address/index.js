import React from "react";
import {
  AddressContainer,
  ContactDetailsContainer,
  CorporateOffice,
  CorporateOfficeContainer,
  GeneralContainer,
  HeadingText,
  HRDepartement,
  RegisterOfficeText,
  RegistredOfficeContainer,
  SalesContainer,
  SubHeading,
  ContactText
} from "./style";

const Address = () => {
  return (
    <AddressContainer>
      <CorporateOfficeContainer>
        <HeadingText>Corporate Office</HeadingText>
        <CorporateOffice>
          3rd Floor, 9, Millers Rd, Kaverappa Layout, Vasanth Nagar, Bengaluru,
          Karnataka 560052
        </CorporateOffice>
      </CorporateOfficeContainer>
      <RegistredOfficeContainer>
        <HeadingText>Registred Office</HeadingText>
        <RegisterOfficeText>
          BELLAD CHAMBERS P.B Road, Vidyanagar Hubli Dharwad, Karnataka 580031
        </RegisterOfficeText>
      </RegistredOfficeContainer>
      <ContactDetailsContainer>
        <HeadingText>Contact Details</HeadingText>
        <HRDepartement>
          <SubHeading>HR Department</SubHeading>
          <ContactText>HR@Beltech.ai</ContactText>
          <ContactText>+91 -9845102222</ContactText>
        </HRDepartement>
        <SalesContainer>
            <SubHeading>Sales:</SubHeading>
            <ContactText>Sales@Beltech.ai</ContactText>
            <ContactText>+91 -9845102222</ContactText>
        </SalesContainer>
        <GeneralContainer>
          <SubHeading>General:</SubHeading>
          <ContactText>Office@Beltech.ai</ContactText>
          <ContactText>+91 -9845102222</ContactText>
        </GeneralContainer>
      </ContactDetailsContainer>
    </AddressContainer>
  );
};

export default Address;
