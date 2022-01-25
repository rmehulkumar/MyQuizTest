import * as React from 'react';
import {Text} from 'react-native';

import {Container, WrongAnswerContainer} from '@components/Containers';
import {NextQButton} from '@components/Buttons';
import {
  Button1Text,
  SmallText,
  QuestionIEText,
  AnswrIEText,
} from '@components/Text';

const Quiz = () => {
  return (
    <Container>
      <SmallText>Fill in the missin word</SmallText>
      <QuestionIEText>
        The <AnswrIEText>House</AnswrIEText> is small.
      </QuestionIEText>
      {/* <CorrectAnswerContainer> */}
      {/* <CorrentAnswerButton>
          <Button1Text>Conutinue</Button1Text>
        </CorrentAnswerButton>
        <CorrectAnswerContainer>*/}

      {/* <WrongAnswerContainer>
        <NextQButton>
          <Button1Text>Conutinue</Button1Text>
        </NextQButton>
      </WrongAnswerContainer> */}
    </Container>
  );
};
export default Quiz;
