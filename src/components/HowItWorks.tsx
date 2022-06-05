import React, { ReactElement } from "react";
import { Text, Grid, GridItem, Flex, Heading, Box } from "@chakra-ui/react";

const itemHeight = 8;
const itemWidth = 8;

const items = [
    {
        num: 1,
        title: "You Upload",
        desc: "Upload your resume or link us your linkedin and fill out a few common application questions",
        link: "/",
    },
    {
        num: 2,
        title: "We Find",
        desc: "Based on your preferences we will curate a personal list of internships that you can customize",
        link: "/",
    },
    {
        num: 3,
        title: "Get Interviews",
        desc: "Once you approve your internship applications we will apply to them and optimize your materials for each one",
        link: "/",
    },
];

interface ItemProps {
    title: string;
    desc: string;
    num: number;
}

const Item = ({ title, desc, num }: ItemProps) => {
    return (
        <GridItem colSpan={1}>
            <Flex
                boxSizing="border-box"
                direction="column"
                bg="white"
                mx={4}
                my={{ base: 4, md: 4, lg: 0 }}
                rounded="1rem"
                shadow="2xl"
                textAlign="center"
                align="center"
                justify="center"
                p={4}
            >
                <Heading as="h5" color="secondary.400" size="md" p={4} m="auto">
                    {num}
                </Heading>
                <Heading as="h5" size="md">
                    {" "}
                    {title}{" "}
                </Heading>
                <Text mt={2}> {desc} </Text>
            </Flex>
        </GridItem>
    );
};

const HowItWorks = () => {
    return (
        <Box bg="#f7f7f7">
            <Flex direction="column" align="center" mb={8} px={8} py={16}>
                <Heading as="h1" size="lg" mb={8} fontWeight="bold" color="#353e44">
                    How it works
                </Heading>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(3, minmax(0, 1fr))",
                    }}
                    textAlign="center"
                >
                    {items.map((item, key) => (
                        <Item key={key} title={item.title} desc={item.desc} num={item.num} />
                    ))}
                </Grid>
            </Flex>
        </Box>
    );
};

export default HowItWorks;
