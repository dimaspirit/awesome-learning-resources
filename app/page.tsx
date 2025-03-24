'use client'

import { resources } from "@/data";
import Resource from "@/components/Resource";
import { Container, Stack, Box, Heading} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import TAGS from "@/data/tags";
import { IResource } from "@/data/resources";
import AwSelectTags from "@/components/AwSelectTags";

export default function Home() {
  const [resourcesShows, setResourcesShows] = useState(resources);
  // const [priceSelected, setPriceSelected] = useState<string[]>([]);

  type tagSelected = {
    [key: string]: string[]
  }

  const [tagsSelected, setTagsSelected] = useState<tagSelected>({});

  // function updateFilters(filters, updatedFilter) {
  //   const updatedFilters = {
  //     ...filters,
  //     ...updatedFilter,
  //   }
  //   return Object.fromEntries(Object.entries(updatedFilters).filter(([_key, value]) => value.length !== 0));
  // }

  // const onTagSelectChange = (updatedTagSelected: {[key: string]: string[]}) => {
  //   const updatedFilters = updateFilters(tagsSelected, updatedTagSelected);
  //   setTagsSelected(updatedFilters);
  // }

  const onTagsSelectedChange = (tagsSelected: tagSelected): void => {
    setTagsSelected(tagsSelected);
    console.log(tagsSelected);
  };

  // TODO: pass multiple prop and go to TODO1
  const filterResources = (resources: IResource[], filters: {[key: string]: string[]}):IResource[] => {
    const filtersKeys = Object.keys(filters);

    if(!filtersKeys.length) return resources;

    return resources.filter(resource => {
      return Object.entries(filters).every(([filterKey, filterValue]) => {
        if (!filterValue || filterValue.length === 0) return true;
        if (filterKey in resource) {
          // console.log('filterValue', filterValue);
          // console.log('filterKey', filterKey);
          // TODO1: based on multiple props use filterValue.some or filterValue[0] === value
          if (Array.isArray(resource[filterKey as keyof IResource])) {
            return filterValue.some(value => (resource[filterKey as keyof IResource] as string[]).includes(value));
          } else {
            return filterValue.every(value => resource[filterKey as keyof IResource] === value);
          }
        }
        return true;
      })
    })
  }

  useEffect(() => {
    const filteredResources = filterResources(resources, tagsSelected);
    setResourcesShows(filteredResources);
  }, [tagsSelected])

  return (
    <div>
      <main>
        <Box marginY={4} >
          <Container>
            <Heading as="h1" size="2xl" textAlign={'center'}>Awesome learning resource</Heading>
          </Container>
        </Box>

        <Box>
          
        </Box>

        <Container maxW={'2xl'} padding={10}>
          <Box marginBottom={4}>
            <AwSelectTags tags={TAGS} onChange={onTagsSelectedChange} />
          </Box>
          {/* <Box marginBottom={4}>
            <Heading>Filters</Heading>
            <Box>
              <AwSelectTag tag={TAGS.language} onChange={onTagSelectChange} />
              <AwSelectTag tag={TAGS.price} multiple={false} onChange={onTagSelectChange} />
            </Box>
          </Box> */}

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
