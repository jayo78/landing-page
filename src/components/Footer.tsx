import React from "react";
import { Flex, Box, Link, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex direction="column" align="center" p={8}>
            <Box>
                <Link p={2}>Privacy</Link>
                <Link p={2}>Terms</Link>
            </Box>
            <Box p={2}>2022 © Name, Inc. All rights reserved.</Box>
        </Flex>
    );
};

export default Footer;
