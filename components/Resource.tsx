import TAGS from "@/data/tags";
import { IResource } from "@/data/resources";

import { Card, Heading, Button, Stack, Box, Flex, Badge } from "@chakra-ui/react";

const Resource = ({ resource }: { resource: IResource }) => {
  const price = TAGS.price.list.find((p) => p.value === resource.price)?.label || resource.price;
  const typesList = resource.types.map((type) => {
    const typeTag = TAGS.type.list.find((t) => t.value === type);
    return typeTag && 'label' in typeTag ? typeTag.label : type;
  });

  const languagesList = resource.language.map((lang) => {
    const language = TAGS.language.list.find((l) => l.value === lang);
    return language && 'nativeName' in language ? language.nativeName : lang;
  });

  return (
    <Card.Root key={resource.link}>
      <Card.Header>
        <Heading size="2xl">{resource.title}</Heading>
      </Card.Header>

      <Card.Body>
        <Stack gap={"4"}>
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
              {languagesList.map((lang) => (
                <Badge key={lang} variant={'surface'} size="md" fontWeight={"normal"}>{lang}</Badge>
              ))}
            </Flex>
          </Box>
        </Stack>
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