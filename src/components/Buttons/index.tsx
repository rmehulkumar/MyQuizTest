import styled from 'styled-components/native';
import Theme from '@components/Theme';
import LinearGradient from 'react-native-linear-gradient';

export const Button = styled.TouchableOpacity``;

export const OptionButton = styled(Button)`
  border-radius: 10px;
  background-color: ${Theme.COLORS.SECONDARY};
`;

export const CorrectOption = styled(Button)`
  border-radius: 10px;
  background-color: ${Theme.COLORS.BUTTON_1};
`;

export const WrongOption = styled(Button)`
  border-radius: 10px;
  background-image: linear-gradient(
    ${Theme.COLORS.BUTTON_2},
    ${Theme.COLORS.BUTTON_3}
  );
`;

export const ContineButton = styled(Button)`
  border-radius: 25px;
  height: 50px;
  text-align: center;
  background-color: ${Theme.COLORS.BUTTON};
`;

export const NextQButton = styled(Button)`
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 30px;
  text-align: center;
  background-color: ${Theme.COLORS.WHITE};
`;

export const WrongAnswerContainer = styled(LinearGradient).attrs({
  colors: [Theme.COLORS.BUTTON_2, Theme.COLORS.BUTTON_3],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})``;

export const WrongAnswerButton = styled(Button)`
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 30px;
    text-align: center;
    background-color: ${Theme.COLORS.WHITE};
`;
