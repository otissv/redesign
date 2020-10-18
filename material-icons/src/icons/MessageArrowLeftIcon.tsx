import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MessageArrowLeftIcon: FC<IconInterface> = function MessageArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageArrowLeftIcon ${className}`;
      return (
        <Icon alt="MessageArrowLeft" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M16 11H11.5L13.3 12.8L12 14L8 10L12 6L13.2 7.2L11.5 9H16V11Z" />

        </Icon>
      );
    };
    MessageArrowLeftIcon.displayName = 'MessageArrowLeftIcon';
      