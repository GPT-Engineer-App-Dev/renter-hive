import { Box, Container, VStack, Text, Input, Button, HStack, Flex, Heading, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    propertyType: ""
  });

  const [searchResults, setSearchResults] = useState([]);
  const [bookingConfirmation, setBookingConfirmation] = useState("");

  const handleSearch = () => {
    // Mock data for listings
    const listings = [
      { id: 1, title: "Beautiful Family House", location: "New York", price: 2500, type: "House", beds: 3, baths: 2, sqft: 1800, image: "https://via.placeholder.com/400" },
      { id: 2, title: "Modern Apartment", location: "Los Angeles", price: 1800, type: "Apartment", beds: 2, baths: 1, sqft: 1200, image: "https://via.placeholder.com/400" },
      { id: 3, title: "Cozy Studio", location: "San Francisco", price: 1200, type: "Studio", beds: 1, baths: 1, sqft: 600, image: "https://via.placeholder.com/400" }
    ];

    const results = listings.filter(listing => {
      return (
        (searchCriteria.location === "" || listing.location.toLowerCase().includes(searchCriteria.location.toLowerCase())) &&
        (searchCriteria.minPrice === "" || listing.price >= parseInt(searchCriteria.minPrice)) &&
        (searchCriteria.maxPrice === "" || listing.price <= parseInt(searchCriteria.maxPrice)) &&
        (searchCriteria.propertyType === "" || listing.type.toLowerCase().includes(searchCriteria.propertyType.toLowerCase()))
      );
    });

    setSearchResults(results);
  };

  const handleBooking = (property) => {
    // Simulate booking process
    setBookingConfirmation(`You have successfully booked ${property.title} for $${property.price} per month.`);
  };

  return (
    <Box>
      {bookingConfirmation && (
        <Box bg="green.100" p={4} mb={4} borderRadius="md" textAlign="center">
          <Text fontSize="lg" color="green.800">{bookingConfirmation}</Text>
        </Box>
      )}
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
            <Input placeholder="Location" size="lg" width="200px" value={searchCriteria.location} onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })} />
            <Input placeholder="Min Price" size="lg" width="150px" value={searchCriteria.minPrice} onChange={(e) => setSearchCriteria({ ...searchCriteria, minPrice: e.target.value })} />
            <Input placeholder="Max Price" size="lg" width="150px" value={searchCriteria.maxPrice} onChange={(e) => setSearchCriteria({ ...searchCriteria, maxPrice: e.target.value })} />
            <Input placeholder="Property Type" size="lg" width="200px" value={searchCriteria.propertyType} onChange={(e) => setSearchCriteria({ ...searchCriteria, propertyType: e.target.value })} />
            <Button colorScheme="blue" size="lg" onClick={handleSearch}>Search</Button>
          </HStack>
        </Container>
      </Box>

      {/* Search Results */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={10} textAlign="center">Search Results</Heading>
          {searchResults.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {searchResults.map(result => (
                <Box key={result.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <Image src={result.image} alt={result.title} />
                  <Box p={6}>
                    <Heading as="h3" size="md" mb={2}>{result.title}</Heading>
                    <Text fontSize="sm" color="gray.600">{result.beds} Beds • {result.baths} Baths • {result.sqft} sqft</Text>
                    <Text mt={4} fontSize="lg" fontWeight="bold">${result.price} / month</Text>
                    <Button colorScheme="green" mt={4} onClick={() => handleBooking(result)}>Book Now</Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <Text fontSize="lg" textAlign="center">No results found</Text>
          )}
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
                <Button colorScheme="green" mt={4} onClick={() => handleBooking({ title: "Beautiful Family House", price: 2500 })}>Book Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400" alt="Property 2" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Modern Apartment</Heading>
                <Text fontSize="sm" color="gray.600">2 Beds • 1 Bath • 1,200 sqft</Text>
                <Text mt={4} fontSize="lg" fontWeight="bold">$1,800 / month</Text>
                <Button colorScheme="green" mt={4} onClick={() => handleBooking({ title: "Modern Apartment", price: 1800 })}>Book Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400" alt="Property 3" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>Cozy Studio</Heading>
                <Text fontSize="sm" color="gray.600">1 Bed • 1 Bath • 600 sqft</Text>
                <Text mt={4} fontSize="lg" fontWeight="bold">$1,200 / month</Text>
                <Button colorScheme="green" mt={4} onClick={() => handleBooking({ title: "Cozy Studio", price: 1200 })}>Book Now</Button>
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