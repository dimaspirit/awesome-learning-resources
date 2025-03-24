import { useEffect, useState } from "react";
import { Heading, Box, Stack } from "@chakra-ui/react";
import AwSelectTag from "./AwSelectTag";

import { Tags, TagValues } from "@/data/tags";

type tagSelected = {
  [key: string]: string[]
}

interface IAwSelectTagsProps {
  tags: Tags;
  onChange: (tagsSelected: {[key: string]: string[]}) => void;
}

const AwSelectTags = ({tags, onChange} : IAwSelectTagsProps) => {
  const [tagsSelected, setTagsSelected] = useState<tagSelected>({});

  function updateSeletedTags(tagsSelected: tagSelected, updatedTag: tagSelected) {
    const updatedTags = {
      ...tagsSelected,
      ...updatedTag,
    }

    return Object.fromEntries(Object.entries(updatedTags).filter(([, value]) => Array.isArray(value) && value.length !== 0)) as tagSelected;
  }

  const onChangeTag = (updatedTag: tagSelected) => {
    const updatedSeletedTags = updateSeletedTags(tagsSelected, updatedTag);
    setTagsSelected(updatedSeletedTags);
    onChange(updatedSeletedTags);
  }

  useEffect(() => {
    
    console.log('tagsSelected', tagsSelected);

  }, [tagsSelected]);

  return (
    <Box>
      <Heading size="xs">FILTERS</Heading>
      <Stack>
      {(Object.keys(tags) as TagValues[]).map((tagKey) =>
        <AwSelectTag tag={tags[tagKey]} key={`key-${tagKey}`} onChange={onChangeTag} />)}
      </Stack>
    </Box>
  )
}

export default AwSelectTags;