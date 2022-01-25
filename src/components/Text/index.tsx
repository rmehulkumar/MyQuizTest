import styled from 'styled-components/native';
import Theme from '@components/Theme';

export const SmallText = styled.Text`
  font-size: 11px;
  color: ${Theme.COLORS.WHITE}99;
  text-align: center;
  margin-top: 50px;
`;

export const QuestionIEText = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  color: ${Theme.COLORS.WHITE};
`;

export const AnswrIEText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
  color: ${Theme.COLORS.WHITE};
`;

export const QuestionText = styled.Text`
  font-size: 12px;
  color: ${Theme.COLORS.WHITE};
`;

export const OptionsText = styled.Text`
  font-size: 12px;
  color: ${Theme.COLORS.PRIMARY};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${Theme.COLORS.WHITE};
`;

export const Button1Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${Theme.COLORS.BUTTON_2};
`;
