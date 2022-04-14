import styled from 'styled-components';
import {Color, Typography, Radius} from '../../../styles/variables';
import {Spacer} from '../Spacer';
import {Text} from '../Text';

const Wrapper = styled.label`
  width: 100%;
`;

const StyledInput = styled.input<{error: boolean}>`
  width: 100%;
  padding: 16px;
  border: 1px solid
    ${(props): string =>
      props.error ? Color.Red.Red_100 : Color.GrayAlpha.GrayAlpha_10};
  border-radius: ${Radius.Small};
  ${Typography.Default_Dense_16};

  &::placeholder {
    color: ${Color.GrayAlpha.GrayAlpha_24};
  }

  &:focus {
    outline: none;
    border: 1px solid ${Color.Primary.Purple_50};
  }
`;

export type Props = React.ComponentPropsWithoutRef<'input'> & {
  label: string;
  error?: string;
};

export const Input: React.VFC<Props> = ({label, error, ...rest}) => {
  return (
    <Wrapper>
      <Text>{label}</Text>
      <Spacer sizes={{mobile: {mt: 8}}} />
      <StyledInput {...rest} error={error != null} />
      <Spacer sizes={{mobile: {mt: 8}}} />
      {error != null && (
        <Text
          color={Color.Red.Red_100}
          typography={{mobile: Typography.Default_Dense_12}}
          role="alert"
        >
          {error}
        </Text>
      )}
    </Wrapper>
  );
};
