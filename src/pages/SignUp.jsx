import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

function SignUp() {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Sign Up</Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
        <Button mt={4} colorScheme="blue">Sign Up</Button>
      </FormControl>
    </Box>
  );
}

export default SignUp;