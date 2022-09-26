import React from 'react';
import { DiFirebase, DiMailchimp, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web and app development
      world. Special interest in Machine Learning
    </SectionText>
    <List>
      <ListItem>
        <picture>
          
          <DiMailchimp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning </ListTitle>
          <ListParagraph>
            Experiece with <br />
            Machine learning , deep learning ,nlp
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Firebase Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Android developer</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Kotlin and flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
