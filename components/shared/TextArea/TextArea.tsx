import styled from 'styled-components';
import {Color, Typography, Radius} from '../../../styles/variables';
import {Spacer} from '../Spacer';
import {Text} from '../Text';

const StyledTextArea = styled.textarea<{error: boolean}>`
  resize: none;
  width: 100%;
  padding: 16px;
  border: 1px solid
    ${(props): string =>
      props.error ? Color.Red.Red_100 : Color.GrayAlpha.GrayAlpha_10};
  border-radius: ${Radius.Small};
  ${Typography.Default_Comfort_16};

  &::placeholder {
    color: ${Color.GrayAlpha.GrayAlpha_24};
  }

  &:focus {
    outline: none;
    border: 1px solid ${Color.Primary.Purple_50};
  }
`;

export type Props = React.ComponentPropsWithoutRef<'textarea'> & {
  label: string;
  error?: string;
};

export const TextArea: React.VFC<Props> = ({label, error, ...rest}) => {
  return (
    <label>
      <Text>{label}</Text>
      <Spacer sizes={{mobile: {mt: 8}}} />
      <StyledTextArea rows={4} {...rest} error={error != null} />
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
    </label>
  );
};
