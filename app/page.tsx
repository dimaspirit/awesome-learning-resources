import { resources } from "@/data";
import Resource from "@/components/Resource";
import { Container, Stack, Box, Heading} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <main>
        <Box marginY={4} >
          <Container>
            <Heading as="h1" size="2xl" textAlign={'center'}>Awesome learning resource</Heading>
          </Container>
        </Box>

        <Container maxW={'2xl'} padding={10}>
          <Stack direction={'column'} gap="10">
            {resources.map((resource) => (
              <Resource key={resource.link} resource={resource} />
            ))}
          </Stack>
        </Container>
      </main>

      <Container as="footer" background='bg.panel' marginTop={4} padding={4}>
        <a
          href="https://github.com/dimaspirit/awesome-learning-resources"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </a>
      </Container>
    </div>
  );
}
