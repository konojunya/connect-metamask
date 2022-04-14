import styled from 'styled-components';
import {Item} from './Item';
import type {Alignment} from '../../../styles/variables';

type Config = {
  gap?: number;
  horizontal?: boolean;
  wrap?: boolean;
  vAlign?: Alignment;
  hAlign?: Alignment;
};

const nameMap: {[key in Alignment]?: string} = {
  start: 'flex-start',
  end: 'flex-end',
};

export function getAlignmentValue(align: Alignment): string {
  return nameMap[align] != null ? (nameMap[align] as string) : align;
}

function styles(
  config: Config | undefined,
  inherit?: Config
): string | undefined {
  if (config == null) {
    return undefined;
  }

  const cfg = {...(inherit != null ? inherit : {}), ...config};
  const arr: string[] = [];

  if (cfg.horizontal != null) {
    arr.push(`flex-direction: ${cfg.horizontal ? 'row' : 'column'};`);
  }

  if (cfg.wrap != null) {
    arr.push(`flex-wrap: ${cfg.wrap ? 'wrap' : 'nowrap'};`);
  }

  if (cfg.vAlign != null) {
    arr.push(`justify-content: ${getAlignmentValue(cfg.vAlign)};`);
  }

  if (cfg.hAlign != null) {
    arr.push(`align-items: ${getAlignmentValue(cfg.hAlign)};`);
  }

  if (cfg.gap != null) {
    arr.push(`& > :not(:first-child) {
      ${cfg.horizontal ? 'margin-left' : 'margin-top'}: ${cfg.gap}px;
      ${cfg.horizontal ? 'margin-top' : 'margin-left'}: 0;
    }`);
  }

  return arr.join(' ');
}

const Wrapper = styled.div<{
  mobile?: Config;
}>`
  display: flex;
  flex-direction: column;
  ${({mobile}): string | undefined => styles(mobile)}
`;

export type Props<T extends keyof JSX.IntrinsicElements = 'div'> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    mobile?: Config;
    children?: React.ReactNode;
  };

/**
 * NOTE `React.FC` が Generics を使用できないため仕方なく使っていない
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Stack = <T extends keyof JSX.IntrinsicElements>({
  children,
  ...rest
}: Props<T>) => <Wrapper {...rest}>{children}</Wrapper>;

Stack.Item = Item;
