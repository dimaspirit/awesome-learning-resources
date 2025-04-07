'use client'

import { Container, Flex, Stack, Link, Heading} from "@chakra-ui/react";

import RESOURCES from "@/data/resources";

import Resource from "@/components/Resource";

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Container flexGrow={0} padding={4} as="header">
        <Heading as="h1" size="2xl" textAlign={'center'}>Awesome learning resource</Heading>
      </Container>

      <Container maxW={'2xl'} padding={10} as="main">
        <Stack direction={'column'} gap="4">
          {RESOURCES.map((resource) => (
            <Resource key={resource.link} resource={resource} />
          ))}
        </Stack>
      </Container>

      <Container as="footer" flexGrow={0} padding={4} borderTop="2px solid" borderColor="gray.900">
        <Link href="https://github.com/dimaspirit/awesome-learning-resources" target="_blank" rel="noopener noreferrer">
          Github
        </Link>
      </Container>
    </Flex>
  );
}
