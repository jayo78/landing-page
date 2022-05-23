import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Banner = () => {
    return (
        <Flex
            p={12}
            mt={8}
            textAlign="center"
            borderRadius={18}
            align="center"
            direction="column"
            w="100%"
            bg="secondary.100"
        >
            <Heading color="secondary.900" as="h5" size="md">
                Boost your internship applications
            </Heading>
            <Box p={6}>
                <Button
                    bg="secondary.900"
                    color="white"
                    borderRadius="8px"
                    py="4"
                    px="4"
                    lineHeight="1"
                    size="md"
                >
                    Weekly Drop
                </Button>
                <Button
                    bg="white"
                    color="secondary.900"
                    borderRadius="8px"
                    border="2px"
                    borderColor="secondary.900"
                    py="4"
                    px="4"
                    lineHeight="1"
                    size="md"
                >
                    Resources
                </Button>
            </Box>
        </Flex>
    );
};

export default Banner;
