"use client"

import { PRICES } from "@/data"
import { IPrice } from "@/data/tags/prices"
import { createListCollection, SelectValueChangeDetails } from "@chakra-ui/react"

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"

interface IAwSelectProps {
  onChange: (value: string[]) => void;
}

const AwSelect = ({onChange}: IAwSelectProps) => {
  const pricesList = createListCollection({
    items: Object.values(PRICES),
  });

  const handleChange = (details: SelectValueChangeDetails<IPrice>) => {
    console.log('handleChange', details);
    onChange(details.value);
  }

  return (
    <SelectRoot collection={pricesList} size={'md'} multiple name="price" onValueChange={handleChange}>
      <SelectLabel>Price</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {pricesList.items.map((price) => (
          <SelectItem item={price} key={price.value}>
            {price.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

export default AwSelect;