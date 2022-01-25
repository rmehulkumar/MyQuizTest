import styled from 'styled-components/native';
import Theme from '@components/Theme';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${Theme.COLORS.PRIMARY};
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0px;
  height: 150px;
  left: 0px;
  justify-content: center;
  right: 0px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const CorrectAnswerContainer = styled(BottomContainer)`
  background-color: ${Theme.COLORS.BUTTON_1};
`;

export const WrongAnswerContainer = styled(LinearGradient).attrs({
  colors: [Theme.COLORS.BUTTON_2, Theme.COLORS.BUTTON_3],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  position: absolute;
  bottom: 0px;
  height: 150px;
  left: 0px;
  justify-content: center;
  right: 0px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;
