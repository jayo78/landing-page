import React from "react";
import Link from "next/link";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "../components/Logo";

interface MenuItemProps {
    isLast?: boolean;
    children: React.ReactNode;
    to: string;
}

const MenuItem = ({ children, isLast, to = "/" }: MenuItemProps) => {
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
        >
            <Link href={to}>{children}</Link>
        </Text>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="white">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const Header = () => {
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg={["secondary.400", "secondary.400", "transparent", "transparent"]}
            color={["white", "white", "#353e44", "#353e44"]}
        >
            <Flex align="center">
                <Logo />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/how">How It works </MenuItem>
                    <MenuItem to="/pricing">Pricing </MenuItem>
                    <MenuItem to="/signup" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            color="white"
                            border="2px"
                            bg="secondary.400"
                            _hover={{
                                bg: "secondary.400",
                            }}
                        >
                            Weekly Drop
                        </Button>
                    </MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;
