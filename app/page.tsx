'use client'

import { resources } from "@/data";
import Resource from "@/components/Resource";
import { Container, Stack, Box, Heading} from "@chakra-ui/react";

import AwSelect from "@/components/AwSelect";
import { useEffect, useState } from "react";

export default function Home() {
  const [resourcesShows, setResourcesShows] = useState(resources);
  const [priceSelected, setPriceSelected] = useState<string[]>([]);

  const onPriceSelectChange = (value: string[]) => {
    setPriceSelected(value);
    console.log('onPriceSelectChange value', value);
  }

  useEffect(() => {
    if(priceSelected.length) {
      const resourcesFiltered = resources.filter(resource => {
        return priceSelected.some(ps => ps === resource.price)
      });

      setResourcesShows(resourcesFiltered)
    } else {
      setResourcesShows(resources)
    }
  }, [priceSelected])

  return (
    <div>
      <main>
        <Box marginY={4} >
          <Container>
            <Heading as="h1" size="2xl" textAlign={'center'}>Awesome learning resource</Heading>
          </Container>
        </Box>

        <Container maxW={'2xl'} padding={10}>
          <Box marginBottom={4}>
            <Heading>Filters</Heading>
            <Box>
              <AwSelect onChange={onPriceSelectChange} />
            </Box>
          </Box>

          <Stack direction={'column'} gap="4">
            {resourcesShows.map((resource) => (
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
