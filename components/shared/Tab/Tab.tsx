import {useCallback} from 'react';
import styled from 'styled-components';
import {Item, TabProps} from './Item';

const Wrapper = styled.ul<{length: number}>`
  display: flex;
  padding-inline-start: 0;
  justify-content: space-around;

  & > li {
    list-style: none;
    cursor: pointer;
  }
`;

export interface Props {
  tabs: TabProps[];
  selected: number;
  as?: keyof JSX.IntrinsicElements;
  onSelect?: (selectedTabIndex: number) => void;
}

export const Tab: React.VFC<Props> = ({tabs, as, onSelect, selected}) => {
  const length = tabs.length;

  const handleClick = useCallback(
    (id: string) => {
      const tab = tabs.find(tab => tab.id === id);
      if (tab == null) {
        return;
      }

      const selectedIndex = tabs.indexOf(tab);
      onSelect?.(selectedIndex);
    },
    [onSelect, tabs]
  );

  return (
    <Wrapper length={length}>
      {tabs.map((tab, i) => (
        <Item
          key={tab.id}
          id={tab.id}
          tab={tab}
          as={as}
          active={selected === i}
          onClick={handleClick}
        >
          {tab.content}
        </Item>
      ))}
    </Wrapper>
  );
};
