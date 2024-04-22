import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function AddProperty() {
  return (
    <Box p={4}>
      <form>
        <FormControl isRequired>
          <FormLabel htmlFor="propertyName">Property Name</FormLabel>
          <Input id="propertyName" placeholder="Enter property name" />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input id="description" placeholder="Enter description" />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input id="price" placeholder="Enter price" type="number" />
        </FormControl>
        <Button mt={4} colorScheme="blue" type="submit">
          Add Property
        </Button>
      </form>
    </Box>
  );
}

export default AddProperty;
