import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Abhinav Singh's Portfolio
      </SectionTitle>
      <SectionText>
        I'm Abhinav Singh pursued my MCA from BBD university .My skills are "WEB
        DEVELOPEMENT and "ANDROID DEVELOPEMENT" and Keen intrest in ARTIFICIAL
        INTELLIGENCE
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://github.com/abhinavsrepository')
        }
      >
        Know More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
