import React from "react";
import { Text, Flex, Heading, Image, Box, SimpleGrid } from "@chakra-ui/react";

const items = [
    {
        id: 1,
        image: "https://source.unsplash.com/collection/404339/400x200",
        title: "Input your preferences",
        desc: "Give us areas you would be interested in getting an internship in as well as areas you have experience in",
        link: "/",
    },
    {
        id: 2,
        image: "https://source.unsplash.com/collection/404339/400x200",
        title: "Gather your materials",
        desc: "Upload your resume or link us your linkedin and fill out a few common application questions",
        link: "/",
    },
    {
        id: 3,
        image: "https://source.unsplash.com/collection/404339/400x200",
        title: "Get personalized internships",
        desc: "Based on your preferences we will curate a personal list of internships that you can customize",
        link: "/",
    },
    {
        id: 4,
        image: "https://source.unsplash.com/collection/404339/400x200",
        title: "We apply to internships",
        desc: "Once you approve your internship applications we will apply to them and optimize your materials for each one",
        link: "/",
    },
];

interface ItemProps {
    title: string;
    desc: string;
    image: string;
}

const ItemRowLeft = ({ title, desc, image }: ItemProps) => {
    return (
        <>
            <Flex direction="column" justifyContent="center" m={5}>
                <Heading as="h5" size="md"> {title} </Heading>
                <Text> {desc} </Text>
            </Flex>
            <Box m={5}>
                <Image
                    src={image}
                    boxSize="100%"
                    rounded="1rem"
                    shadow="2xl"
                    alt="Hero Image"
                />
            </Box>
        </>
    );
};

const ItemRowRight = ({ title, desc, image }: ItemProps) => {
    return (
        <>
            <Box m={5}>
                <Image
                    src={image}
                    boxSize="100%"
                    rounded="1rem"
                    shadow="2xl"
                    alt="Hero Image"
                />
            </Box>
            <Flex direction="column" justifyContent="center" m={5}>
                <Heading as="h5" size="md"> {title} </Heading>
                <Text> {desc} </Text>
            </Flex>
        </>
    );
};

// interface FeaturesProps {
// featuresList: [FeatureItemProps]
// }

const HowItWorks = () => {
    return (
        <Box>
            <Box mb={7} textAlign="center">
                <Heading as="h1" size="xl" fontWeight="bold" color="primary.800">
                    How it works
                </Heading>
            </Box>
            <SimpleGrid columns={2}>
                {items.map((item, key) =>
                    key % 2 !== 0 ? (
                        <ItemRowLeft title={item.title} desc={item.desc} image={item.image} />
                    ) : (
                        <ItemRowRight title={item.title} desc={item.desc} image={item.image} />
                    )
                )}
            </SimpleGrid>
        </Box>
    );
};

export default HowItWorks;
