import React from "react";
import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, CheckIcon, ArrowRightIcon } from "@chakra-ui/icons";

const itemHeight = 8;
const itemWidth = 8;

const items = [
    {
        id: 1,
        icon: <EditIcon color="primary.700" h={itemHeight} w={itemWidth} />,
        title: "Input your preferences",
        desc: "Give us areas you would be interested in getting an internship in as well as areas you have experience in",
        link: "/",
    },
    {
        id: 2,
        icon: <CheckIcon color="primary.700" h={itemHeight} w={itemWidth} />,
        title: "Gather your materials",
        desc: "Upload your resume or link us your linkedin and fill out a few common application questions",
        link: "/",
    },
    {
        id: 3,
        icon: <CalendarIcon color="primary.700" h={itemHeight} w={itemWidth} />,
        title: "Get personalized internships",
        desc: "Based on your preferences we will curate a personal list of internships that you can customize",
        link: "/",
    },
    {
        id: 4,
        icon: <ArrowRightIcon color="primary.700" h={itemHeight} w={itemWidth} />,
        title: "We apply to internships",
        desc: "Once you approve your internship applications we will apply to them and optimize your materials for each one",
        link: "/",
    },
];

interface ItemProps {
    title: string;
    desc: string;
    icon: JSX.Element;
}

const ItemRow = ({ title, desc, icon }: ItemProps) => {
    return (
        <Flex>
            <Box padding={6} border="2px" borderColor="gray" m="auto">
                {icon}
            </Box>
            <Flex boxSizing="border-box" direction="column" justifyContent="center" m={5}>
                <Heading as="h5" size="md">
                    {" "}
                    {title}{" "}
                </Heading>
                <Text> {desc} </Text>
            </Flex>
        </Flex>
    );
};

// interface FeaturesProps {
// featuresList: [FeatureItemProps]
// }

const HowItWorks = () => {
    return (
        <Flex alignItems="center" direction="column" mt={12} px={8} py={16}>
            <Box mb={8} textAlign="center">
                <Heading as="h1" size="xl" fontWeight="bold" color="primary.800">
                    How it works
                </Heading>
            </Box>
            <Box w="75%">
                {items.map((item, key) => (
                    <ItemRow key={key} title={item.title} desc={item.desc} icon={item.icon} />
                ))}
            </Box>
        </Flex>
    );
};

export default HowItWorks;
