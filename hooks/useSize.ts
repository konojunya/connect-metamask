import {useState, useEffect} from 'react';

export interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function useSize(): Size {
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(): void {
      setSize({
        width: document.body.clientWidth,
        height: size.height,
      });
    }

    window.addEventListener('resize', handleResize);

    setSize({
      width: document.body.clientWidth,
      height: window.innerHeight,
    });

    return (): void => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return size;
}
