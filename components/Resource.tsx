'use client';

import { TAGS } from "@/data/tags";
import { IResource } from "@/data/resources";

import { Card, Heading, Button, Box, Flex, Badge, Popover, Portal, Image } from "@chakra-ui/react";

const Resource = ({ resource }: { resource: IResource }) => {
  const price = TAGS.price.list.find((p) => p.value === resource.price)?.label ?? resource.price ?? '';

  const typesList = (resource.types || []).map((type) => {
    const typeTag = TAGS.type.list.find((t) => t.value === type);
    return typeTag?.label ?? type;
  });

  const languagesList = (resource.language || []).map((lang) => {
    const language = TAGS.language.list.find((l) => l.value === lang);
    return language?.nativeName ?? lang;
  });
  const isLanguagesOverflow = languagesList.length > 4;
  const displayedLanguages = isLanguagesOverflow ? languagesList.slice(0, 4) : languagesList;


  return (
    <Card.Root key={resource.link}>
      {/* <Image src="/resources/fcc_primary_large.svg" px={8} pt={4} alt="Resource Icon" /> */}

      <Card.Body gap="2">
        <Card.Title fontSize={'2xl'}>{resource.title}</Card.Title>

        <Box>
          <Heading as="span" size="xs" fontWeight={'normal'} color={"fg.muted"} textTransform={'uppercase'} marginBottom={'1'}>
            types
          </Heading>

          <Flex wrap="wrap" gap="1">
            {typesList.map((type) => (
              <Badge key={type} variant={'surface'} size="md" fontWeight={"normal"}>{type}</Badge>
            ))}
          </Flex>
        </Box>

        <Box>
          <Heading as="span" size="xs" fontWeight={'normal'} color={"fg.muted"} textTransform={'uppercase'} marginBottom={'1'}>
            price
          </Heading>
          
          <Box gap="1">
            <Badge variant={'surface'} size="md" fontWeight={"normal"}>{price}</Badge>
          </Box>
        </Box>

        <Box>
          <Heading as="span" size="xs" fontWeight={'normal'} color={"fg.muted"} textTransform={'uppercase'} marginBottom={'1'}>
            languages
          </Heading>

          <Flex wrap="wrap" gap="1">
            {displayedLanguages.map((lang) => (
              <Badge key={lang} variant={'surface'} size="md" fontWeight={"normal"}>{lang}</Badge>
            ))}
            {isLanguagesOverflow &&  <Popover.Root positioning={{ overlap: true }}>
              <Popover.Trigger asChild>
                <Button size="xs" variant="surface">
                  +{languagesList.length - 4} more
                </Button>
              </Popover.Trigger>
              <Portal>
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Arrow />
                    <Popover.Body>
                        <Flex wrap="wrap" gap="1">
                          {languagesList.map((lang) => (
                            <Badge key={lang} variant={'surface'} size="md" fontWeight={"normal"}>{lang}</Badge>
                          ))}
                        </Flex>
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </Popover.Root>}
          </Flex>
        </Box>
      </Card.Body>

      <Card.Footer>
        <Button asChild>
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer">
            Visit Resource
          </a>
        </Button>
      </Card.Footer>
    </Card.Root>
  )
};

export default Resource;