import { Box, Container, VStack, Text, Input, Button, HStack, Flex, Heading, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.700" color="white" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">Property Rental</Heading>
          <HStack spacing={8}>
            <Link href="#home" fontSize="lg">Home</Link>
            <Link href="#listings" fontSize="lg">Listings</Link>
            <Link href="#about" fontSize="lg">About</Link>
            <Link href="#contact" fontSize="lg">Contact</Link>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box id="home" bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading as="h2" size="2xl" mb={6}>Find Your Dream Rental Property</Heading>
          <Text fontSize="lg" mb={8}>Search from a wide range of properties available for rent.</Text>
          <HStack spacing={4} justify="center">
            <Input placeholder="Search for properties..." size="lg" width="400px" />
            <Button colorScheme="blue" size="lg">Search</Button>
          </HStack>
        </Container>
      </Box>

      {/* Featured Listings */}
      <Box id="listings" py={20}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={10} textAlign="center">Featured Listings</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400" alt="Property 1" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Beautiful Family House</Heading>
                <Text fontSize="sm" color="gray.600">3 Beds • 2 Baths • 1,800 sqft</Text>
                <Text mt={4} fontSize="lg" fontWeight="bold">$2,500 / month</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400" alt="Property 2" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Modern Apartment</Heading>
                <Text fontSize="sm" color="gray.600">2 Beds • 1 Bath • 1,200 sqft</Text>
                <Text mt={4} fontSize="lg" fontWeight="bold">$1,800 / month</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400" alt="Property 3" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Cozy Studio</Heading>
                <Text fontSize="sm" color="gray.600">1 Bed • 1 Bath • 600 sqft</Text>
                <Text mt={4} fontSize="lg" fontWeight="bold">$1,200 / month</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.700" color="white" py={10}>
        <Container maxW="container.xl" textAlign="center">
          <Text mb={4}>Contact us: info@propertyrental.com | +1 234 567 890</Text>
          <HStack spacing={4} justify="center">
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
          <Text mt={4}>© 2023 Property Rental. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;