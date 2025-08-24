'use client'

import { Container, Flex, Stack } from "@chakra-ui/react";

import RESOURCES from "@/data/resources";

import Resource from "@/components/Resource";
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />

      <Container maxW={'2xl'} padding={10} as="main">
        <Stack direction={'column'} gap="4">
          {RESOURCES.map((resource) => (
            <Resource key={resource.link} resource={resource} />
          ))}
        </Stack>
      </Container>
    </Flex>
  );
}
