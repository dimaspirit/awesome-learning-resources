import { IResource } from '@/types/resource';
import { languages, types, PRICES } from '@/data';
import { Card, Heading, Button, Badge, Flex, Stack, Box } from "@chakra-ui/react"

const Resource = ({ resource }: { resource: IResource }) => {
  const languagesList = resource.languages.map((language) => languages[language].nativeName);
  const typesList = resource.types.map((type) => types[type].name);
  const price = PRICES[resource.price].label;

  return (
    <Card.Root key={resource.link}>
      <Card.Header>
        <Heading size="4xl">{resource.title}</Heading>
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
            <Heading size="xs" fontWeight={'normal'} color={"fg.muted"} textTransform={'uppercase'} marginBottom={'1'}>
              languages
            </Heading>
            
            <Flex wrap="wrap" gap="1">
              {languagesList.map((language) => (
                <Badge key={language} variant={'surface'} size="md" fontWeight={"normal"}>{language}</Badge>
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