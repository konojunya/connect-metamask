import {Color, Typography} from './variables';
import {Story} from '@storybook/react/types-6-0';
import styled from 'styled-components';
import {Stack} from '../components/shared/Stack';
import {Text} from '../components/shared/Text';

export default {
  title: 'styles/variables',
};

const ColorBox = styled.div<{background: string; label: string}>`
  min-width: 150px;
  min-height: 125px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: ${(props): string => props.background};
  position: relative;

  &:before {
    content: '${(props): string => props.label}';
    background: ${Color.GrayAlpha.GrayAlpha_24};
    color: ${Color.White.White_100};
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const colorTemplate: Story = () => (
  <Stack mobile={{gap: 16}}>
    <Stack mobile={{gap: 8, horizontal: true}}>
      {[...Object.keys(Color.Primary)].map(key => (
        <ColorBox
          background={`${(Color.Primary as any)[key]}`}
          label={key}
          key={`${key}`}
        />
      ))}
    </Stack>
    <Stack mobile={{gap: 8, horizontal: true}}>
      {[...Object.keys(Color.Gray)].map(key => (
        <ColorBox
          background={`${(Color.Gray as any)[key]}`}
          label={key}
          key={`${key}`}
        />
      ))}
    </Stack>
    <Stack mobile={{gap: 8, horizontal: true}}>
      {[...Object.keys(Color.GrayAlpha)].map(key => (
        <ColorBox
          background={`${(Color.GrayAlpha as any)[key]}`}
          label={key}
          key={`${key}`}
        />
      ))}
    </Stack>
    <Stack mobile={{gap: 8, horizontal: true}}>
      {[...Object.keys(Color.White)].map(key => (
        <ColorBox
          background={`${(Color.White as any)[key]}`}
          label={key}
          key={`${key}`}
        />
      ))}
    </Stack>
    <Stack mobile={{gap: 8, horizontal: true}}>
      {[...Object.keys(Color.Red)].map(key => (
        <ColorBox
          background={`${(Color.Red as any)[key]}`}
          label={key}
          key={`${key}`}
        />
      ))}
    </Stack>
    <Stack mobile={{gap: 8, horizontal: true}}>
      {[...Object.keys(Color.Thirdparty)].map(key => (
        <ColorBox
          background={`${(Color.Thirdparty as any)[key]}`}
          label={key}
          key={`${key}`}
        />
      ))}
    </Stack>
  </Stack>
);

export const Colors = colorTemplate.bind({});

const typographyTemplate: Story = () => (
  <Stack mobile={{gap: 16}}>
    {[...Object.keys(Typography)].map(key => (
      <Text typography={{mobile: (Typography as any)[key]}} key={`${key}`}>
        [{key}]
        <br />
        本決まりの文章ですあいうえおかきくけこ
        <br />
        ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
      </Text>
    ))}
  </Stack>
);

export const Typographies = typographyTemplate.bind({});
