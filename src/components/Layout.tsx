import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
            <Header />
            {children}
            <Footer />
        </Flex>
    );
};

export default Layout;
