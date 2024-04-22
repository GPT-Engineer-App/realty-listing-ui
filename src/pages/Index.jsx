// Real Estate Listing Page Component using Chakra UI and react-icons
import { Box, Flex, Heading, Image, Text, Button, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaBath, FaBed, FaCar, FaHeart } from "react-icons/fa";

const Index = () => {
  const properties = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3MTM3NDYwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      address: "1234 Fancy Estate, Big City",
      description: "Beautiful and modern home with a spectacular city view.",
      bedrooms: 4,
      bathrooms: 3,
      carSpaces: 2,
      price: "$950,000",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3MTM3NDYwMzd8MA&ixlib=rb-4.0.3&q=80&w=1080",
      address: "4321 Luxury Blvd, Rich Town",
      description: "A luxurious villa with private pool and landscaped gardens.",
      bedrooms: 5,
      bathrooms: 4,
      carSpaces: 3,
      price: "$1,200,000",
    },
    // Add more properties as needed
  ];

  return (
    <Box p={5}>
      <Heading mb={6}>Real Estate Listings</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {properties.map((property) => (
          <Box key={property.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={`Image of ${property.address}`} />

            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Button size="sm" colorScheme="pink" variant="solid" leftIcon={<Icon as={FaHeart} />}>
                  Favorite
                </Button>
              </Box>

              <Heading fontSize="xl" mt={2} fontWeight="semibold" lineHeight="short">
                {property.address}
              </Heading>

              <Text mt={2} color="gray.600">
                {property.description}
              </Text>

              <Box mt={2}>
                <Flex alignItems="center">
                  <Icon as={FaBed} mr={2} />
                  <Text mr={4}>{property.bedrooms} Beds</Text>

                  <Icon as={FaBath} mr={2} />
                  <Text mr={4}>{property.bathrooms} Baths</Text>

                  <Icon as={FaCar} mr={2} />
                  <Text>{property.carSpaces} Car Spaces</Text>
                </Flex>
              </Box>

              <Box mt={2}>
                <Text fontSize="xl" colorScheme="teal">
                  {property.price}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
