import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center">
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;
