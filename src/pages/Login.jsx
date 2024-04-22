import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

function Login() {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Login</Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
        <Button mt={4} colorScheme="blue">Login</Button>
      </FormControl>
    </Box>
  );
}

export default Login;