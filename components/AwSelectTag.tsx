"use client"

import {
  SelectRoot,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { createListCollection, SelectValueChangeDetails } from "@chakra-ui/react";

import { Tag } from "@/data/tags";

// TODO - Updated tagsSelected type
interface IAwSelectProps {
  tag: Tag;
  multiple?: boolean;
  onChange: (tagsSelected: {[key: string]: string[]}) => void;
}

const AwSelectTag = ({tag, multiple = true, onChange}: IAwSelectProps) => {
  const tagList = createListCollection({
    items: Object.values(tag.list),
  });

  const handleChange = (details: SelectValueChangeDetails) => {
    onChange({ [tag.value]: details.value });
  }

  return (
    <SelectRoot collection={tagList} size={'md'} multiple={multiple} name={tag.value} onValueChange={handleChange}>
      <SelectLabel>{tag.label}</SelectLabel>

      <SelectTrigger clearable={true}>
        <SelectValueText placeholder="Select" />
      </SelectTrigger>

      <SelectContent>
        {tagList.items.map((t) => (
          <SelectItem item={t} key={t.value}>
            {t.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

export default AwSelectTag;