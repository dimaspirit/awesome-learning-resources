'use client'

import { Container, Flex, Stack, SimpleGrid } from "@chakra-ui/react";

import RESOURCES from "@/data/resources";

import Resource from "@/components/Resource";
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Container padding={8} maxW={'8xl'} as="main">
        <SimpleGrid minChildWidth={'320px'} gap={{ base: 4, xl: 6 }}>
          {RESOURCES.map((resource) => (
            <Resource key={resource.link} resource={resource} />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
