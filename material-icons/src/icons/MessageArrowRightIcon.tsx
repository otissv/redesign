import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MessageArrowRightIcon: FC<IconInterface> = function MessageArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageArrowRightIcon ${className}`;
      return (
        <Icon alt="MessageArrowRight" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M12 14L10.8 12.8L12.6 11H8V9H12.5L10.7 7.2L12 6L16 10L12 14Z" />

        </Icon>
      );
    };
    MessageArrowRightIcon.displayName = 'MessageArrowRightIcon';
      