import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Android Apps' },
  { number: 1, text: ' Social Media website for Students interactivity' },
  { number: 3, text: 'Machine Leaning Projects' },
  { number: 1, text: 'Bronze Medal at state level in DISCUSS THROW' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
