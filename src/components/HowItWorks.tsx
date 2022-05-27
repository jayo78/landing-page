import React, { ReactElement } from "react";
import { Text, Grid, GridItem, Flex, Heading, Box } from "@chakra-ui/react";
import { CalendarIcon, CheckIcon, ArrowRightIcon } from "@chakra-ui/icons";

const itemHeight = 8;
const itemWidth = 8;

const items = [
    {
        id: 2,
        icon: <CheckIcon color="secondary.400" h={itemHeight} w={itemWidth} />,
        title: "Gather your materials",
        desc: "Upload your resume or link us your linkedin and fill out a few common application questions",
        link: "/",
    },
    {
        id: 3,
        icon: <CalendarIcon color="secondary.400" h={itemHeight} w={itemWidth} />,
        title: "Get personalized internships",
        desc: "Based on your preferences we will curate a personal list of internships that you can customize",
        link: "/",
    },
    {
        id: 4,
        icon: <ArrowRightIcon color="secondary.400" h={itemHeight} w={itemWidth} />,
        title: "We apply to internships",
        desc: "Once you approve your internship applications we will apply to them and optimize your materials for each one",
        link: "/",
    },
];

interface ItemProps {
    title: string;
    desc: string;
    icon: ReactElement;
}

const Item = ({ title, desc, icon }: ItemProps) => {
    return (
        <GridItem colSpan={1}>
            <Flex
                boxSizing="border-box"
                direction="column"
                bg="white"
                mx={4}
                my={{base: 4, md: 4, lg: 0}}
                rounded="1rem"
                shadow="2xl"
                textAlign="center"
                align="center"
                justify="center"
                p={4}
            >
                <Box p={4} m="auto">
                    {icon}
                </Box>
                <Heading as="h5" size="md">
                    {" "}
                    {title}{" "}
                </Heading>
                <Text> {desc} </Text>
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
                        <Item key={key} title={item.title} desc={item.desc} icon={item.icon} />
                    ))}
                </Grid>
            </Flex>
        </Box>
    );
};

export default HowItWorks;
