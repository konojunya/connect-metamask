import {motion, useAnimation} from 'framer-motion';
import {useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';
import {Depth, Color} from '../../../styles/variables';

const Container = styled.div`
  padding: 16px 16px 0;
`;

function usePrevious(value: boolean): boolean {
  const previousValueRef = useRef<boolean>(value);

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

export interface Props {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const FullModal: React.VFC<Props> = ({open, onClose, children}) => {
  const prevIsOpen = usePrevious(open);
  const controls = useAnimation();

  const handleOnDragEnd = useCallback(
    (_e, info: any) => {
      const shouldClose =
        info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
      if (shouldClose) {
        controls.start('hidden');

        setTimeout(() => {
          controls.start('exit');
        }, 1000);
        onClose?.();
      } else {
        controls.start('visible');
      }
    },
    [controls, onClose]
  );

  useEffect(() => {
    if (prevIsOpen && !open) {
      controls.start('hidden');

      setTimeout(() => {
        controls.start('exit');
      }, 1000);
    } else if (!prevIsOpen && open) {
      controls.start('visible');
    }
  }, [controls, open, prevIsOpen]);

  return (
    <motion.div
      drag="y"
      onDragEnd={handleOnDragEnd}
      initial="hidden"
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400,
      }}
      animate={controls}
      variants={{
        visible: {y: 0, display: 'block'},
        hidden: {y: '100%'},
        exit: {display: 'none'},
      }}
      dragConstraints={{top: 0}}
      dragElastic={0.2}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        display: 'inline-flex',
        backgroundColor: Color.White.White_100,
        width: '100%',
        minHeight: '100%',
        zIndex: Depth.Modal,
      }}
    >
      <Container>{children}</Container>
    </motion.div>
  );
};
