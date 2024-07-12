// src/components/Accordion.tsx
import React from 'react';
import { Accordion as BaseAccordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

interface Props {
  data: {
    title: string;
    description: string;
  }[];
}

export function Accordion({ data = [] }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className='text-orange-400 font-bold text-xl'>{item.title}</AccordionTrigger>
          <AccordionContent className='text-base'>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </BaseAccordion>
  );
}
