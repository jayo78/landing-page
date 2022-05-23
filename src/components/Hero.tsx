import React from "react";
import Link from "next/link";
import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
    ctaLink: string;
}

const Hero = ({ title, subtitle, image, ctaLink, ctaText }: HeroProps) => {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            minH="70vh"
            px={8}
            py={16}
        >
            <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="secondary.900"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="secondary.900"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
                <Link href={ctaLink}>
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
                        {ctaText}
                    </Button>
                </Link>
                <Text fontSize="xs" mt={2} textAlign="center" color="black" opacity="0.6">
                    No credit card required.
                </Text>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Image
                    src={image}
                    boxSize="100%"
                    rounded="1rem"
                    shadow="2xl"
                    alt="Hero Image"
                />
            </Box>
        </Flex>
    );
};

export default Hero;
