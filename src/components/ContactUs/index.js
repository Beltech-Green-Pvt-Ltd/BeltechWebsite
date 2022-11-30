import React, { useState, useEffect } from "react";
import {
  ContactUsForm,
  EmailInput,
  NameInput,
  PhoneNumberInput,
  OrganisationName,
  ProductText,
  ProductContainer,
  ProductCheckBox,
  Label,
  RequirementContainer,
  RequirementField,
  Button
} from "./style";

const Product = [
  "Traffic management",
  "Security",
  "Smart City",
  "Public transport",
  "Tourism",
];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [requirement, setRequirments] = useState("");
  const [checkedState, setCheckedState] = useState(new Array(5).fill(false));

  const handleCheckBox = (index) => {
    let temp = [];
    temp = checkedState.map((value, index1) =>
      index === index1 ? !value : value
    );
    setCheckedState(temp);
  };

  return (
    <ContactUsForm>
      <NameInput placeholder="Name*" />
      <EmailInput placeholder="Email*" />
      <PhoneNumberInput
        placeholder="Phone Number*"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      <OrganisationName placeholder="Organisation Name*" />
      <ProductText>Select product that you are interested in* </ProductText>
      <ProductContainer>
        {Product.map((data, index) => {
          return (
            <ProductCheckBox key={index}>
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleCheckBox(index)}
                style={{ width: "15px", height: "15px" }}
              />
              <Label>{data}</Label>
            </ProductCheckBox>
          );
        })}
      </ProductContainer>
      <RequirementContainer>
        <RequirementField placeholder="Tell us about your requirements"/>
      </RequirementContainer>
      <Button>Submit</Button>
    </ContactUsForm>
  );
};

export default ContactForm;
