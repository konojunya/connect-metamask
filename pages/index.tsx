import type {NextPage} from 'next';
import styled from 'styled-components';
import {Color} from '../styles/variables';
import {Meta} from '../components/shared/Meta';
import {useLocale} from '../hooks/useLocale';

const Text = styled.h1`
  color: ${Color.GrayAlpha.GrayAlpha_80};
`;

const IndexPage: NextPage = () => {
  const {t} = useLocale();

  return (
    <Meta>
      <Text>{t.SAMPLE}</Text>
    </Meta>
  );
};

export default IndexPage;
