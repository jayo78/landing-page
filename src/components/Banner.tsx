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
            w="95%"
            bg="#f7f7f7"
        >
            <Heading color="#353e44" as="h5" size="md">
                Boost your internship applications
            </Heading>
            <Box p={6}>
                <Button
                    bg="secondary.400"
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
                    color="secondary.400"
                    borderRadius="8px"
                    border="2px"
                    borderColor="secondary.400"
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
