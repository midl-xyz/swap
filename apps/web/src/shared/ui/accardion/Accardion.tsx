import { Minus, Plus } from 'lucide-react';
import React, { forwardRef, ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { css } from '~/styled-system/css';

export const AccordionDemo = () => (
  <Accordion.Root
    className={css({
      width: '100%',
    })}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item
      value="item-1"
      className={css({
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #DADADA',
        paddingY: 3,
        gap: 3,
      })}
    >
      <AccordionTrigger>What is V60</AccordionTrigger>
      <AccordionContent>
        V60 is a decentralized exchange (DEX) built on Prom network.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item
      className={css({
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #DADADA',
        paddingY: 3,
        gap: 3,
      })}
      value="item-2"
    >
      <AccordionTrigger>
        Which wallets are compatible with V60?
      </AccordionTrigger>
      <AccordionContent>
        V60 supports multiple wallets, including MetaMask, Trust Wallet, and
        Wallet Connect. Make sure your wallet is connected to Prom network to
        access V60.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item
      className={css({
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #DADADA',
        paddingY: 3,
        gap: 3,
      })}
      value="item-3"
    >
      <AccordionTrigger>How do I connect my wallet to V60?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          To connect your wallet, launch the app and click on the “Connect
          Wallet” button. Select your preferred wallet and follow the prompts to
          authorize the connection.
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item
      className={css({
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #DADADA',
        paddingY: 3,
        gap: 3,
      })}
      value="item-4"
    >
      <AccordionTrigger>
        What trading pairs are available on V60?
      </AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          V60 offers a wide range of trading pairs. You can explore the
          available pairs on the V60 app page.
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item
      className={css({
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #DADADA',
        paddingY: 3,
        gap: 3,
      })}
      value="item-5"
    >
      <AccordionTrigger>Is V60 secure?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes, V60 uses advanced security measures, including smart contract
          audits and encryption.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger
        className={classNames(
          'AccordionTrigger',
          css({
            textAlign: 'left',
            cursor: 'pointer',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: '20px',
            justifyContent: 'space-between',
            '&[data-state="open"] .AccordionPlus': {
              display: 'none',
            },
            '&[data-state="closed"] .AccordionMinus': {
              display: 'none',
            },
          }),
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Plus className="AccordionPlus" />
        <Minus color="#FF927A" className="AccordionMinus" />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ),
);

AccordionContent.displayName = 'AccordionContent';
