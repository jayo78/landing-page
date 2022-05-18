import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Box w="100px" color={["white", "white", "primary.500", "primary.500"]}>
            <Text fontSize="lg" fontWeight="bold">
                Logo
            </Text>
        </Box>
    );
}
