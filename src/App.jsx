import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Flex, Grid, Text, Heading, Input } from "@chakra-ui/react";
import ContactForm from "./components/contactForm/ContatcForm";
import Details from "./components/InputDetails/Details";
import OutputDetails from "./components/outputdetails/OutputDetails";
import AttributeDetails from "./components/attributeDetails/AttributeDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <ContactForm />
      <Details />
      <OutputDetails />
      <AttributeDetails />
    </div>
  );
}

export default App;
