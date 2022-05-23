import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Box w="105px" color={["white", "white", "secondary.900", "secondary.900"]}>
            <Text fontSize="lg" fontWeight="bold">
                BoostApply
            </Text>
        </Box>
    );
}
