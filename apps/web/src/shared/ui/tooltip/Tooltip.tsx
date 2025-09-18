'use client';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import React, {
  ReactNode,
  cloneElement,
  isValidElement,
  useMemo,
  useRef,
  useState,
} from 'react';
import { css } from '~/styled-system/css';

export type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  className?: string;
};

export const Tooltip = ({
  content,
  children,
  side = 'top',
  sideOffset = 6,
  delayDuration = 150,
  disableHoverableContent = true,
  className,
}: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleOpen = () => {
    clearTimer();
    if (delayDuration > 0) {
      timerRef.current = window.setTimeout(() => setOpen(true), delayDuration);
    } else {
      setOpen(true);
    }
  };

  const handleEnter = () => scheduleOpen();
  const handleLeave = () => {
    clearTimer();
    setOpen(false);
  };
  const handleFocus = () => setOpen(true);
  const handleBlur = () => setOpen(false);

  const mergedTrigger = useMemo(() => {
    if (!isValidElement(children)) return children;

    const props: any = children.props || {};
    const merge = (a?: any, b?: any) => (e: any) => {
      a?.(e);
      b?.(e);
    };

    return cloneElement(children as React.ReactElement, {
      onPointerEnter: merge(props.onPointerEnter, handleEnter),
      onMouseEnter: merge(props.onMouseEnter, handleEnter),
      onPointerLeave: merge(props.onPointerLeave, handleLeave),
      onMouseLeave: merge(props.onMouseLeave, handleLeave),
      onFocus: merge(props.onFocus, handleFocus),
      onBlur: merge(props.onBlur, handleBlur),
    });
  }, [children, delayDuration]);

  return (
    <RadixTooltip.Provider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <RadixTooltip.Root open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>{mergedTrigger}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={sideOffset}
            data-side={side}
            className={
              css({
                bg: '#0000009B',
                color: 'white',
                px: 3,
                py: 1,
                rounded: 'sm',
                textStyle: 'caption',
                boxShadow: 'lg',
                zIndex: 300,
              }) + (className ? ` ${className}` : '')
            }
          >
            {content}
            <RadixTooltip.Arrow className={css({ fill: '#0000009B' })} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export const TooltipProvider = RadixTooltip.Provider;
export const TooltipRoot = RadixTooltip.Root;
export const TooltipTrigger = RadixTooltip.Trigger;
export const TooltipContent = RadixTooltip.Content;
export const TooltipArrow = RadixTooltip.Arrow;
