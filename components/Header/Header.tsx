'use client';

import GithubIcon from '@/components/icons/GithubIcon';
import { Container, Flex, Link, Heading, Button } from "@chakra-ui/react";

export function Header() {
  return (
    <Container padding={4} as="header">
      <Flex direction={'column'} alignItems={'center'}>
        <Heading as="h1" size="4xl" textAlign={'center'}>Awesome learning resources</Heading>

        <Button variant={'ghost'} asChild>
          <Link href="https://github.com/dimaspirit/awesome-learning-resources" target="_blank" rel="noopener noreferrer">
            <GithubIcon color={'gray.500'} />Look at Github
          </Link>
        </Button>
      </Flex>
    </Container>
  )
}