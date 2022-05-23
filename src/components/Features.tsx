import {
    Box,
    Text,
    Link,
    VStack,
    Button,
    chakra,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

interface FeatureProps {
    heading: string;
    text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600">
                {heading}
            </chakra.h3>
            <chakra.p>{text}</chakra.p>
        </GridItem>
    );
};

const Features = () => {
    return (
        <Box px="50px" py={16} mt={14}>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                }}
                gap={4}
            >
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px">
                        <Heading as="h2" size="lg" fontWeight="bold" color="secondary.900">
                            You Control Every Step
                        </Heading>
                        <Link href="https://mvvx7n3l5y5.typeform.com/to/YSSf3A3S">
                            <Button
                                bg="secondary.100"
                                color="secondary.900"
                                border="2px"
                                borderColor="secondary.900"
                                borderRadius="8px"
                                py="4"
                                px="4"
                                lineHeight="1"
                                size="md"
                                rightIcon={<ArrowRightIcon />}
                                _hover={{
                                    bg: "secondary.400",
                                }}
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Text opacity="0.8">
                            {"Since we don't know everything about you, we'll need some help with the details."}
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem colSpan={2}>
                    <Box borderLeft="2px" borderColor="secondary.800">
                        <Grid
                            templateColumns={{
                                base: "repeat(1, 1fr)",
                            }}
                            gap={{ base: "4", sm: "8", md: "12" }}
                            p={8}
                        >
                            <Feature
                                heading={"Approval"}
                                text={
                                    "We curate applications specific to you and only apply to the ones you approve"
                                }
                            />
                            <Feature
                                heading={"Input"}
                                text={
                                    "If we don't have enough information to complete an application, we flag it and wait for your input before continuing"
                                }
                            />
                            <Feature
                                heading={"Transparency"}
                                text={
                                    "For the first few applications we screen record the process to make sure you understand whats going on"
                                }
                            />
                            <Feature
                                heading={"Suggestions"}
                                text={
                                    "Before filling out unique application questions, we send you suggestions for what to write and you can decide what to put"
                                }
                            />
                        </Grid>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Features;
