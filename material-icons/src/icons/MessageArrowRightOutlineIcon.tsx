import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MessageArrowRightOutlineIcon: FC<IconInterface> = function MessageArrowRightOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageArrowRightOutlineIcon ${className}`;
      return (
        <Icon alt="MessageArrowRightOutline" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H6L4 18V4H20M8 9V11H12.5L10.7 12.8L12 14L16 10L12 6L10.8 7.2L12.5 9H8Z" />

        </Icon>
      );
    };
    MessageArrowRightOutlineIcon.displayName = 'MessageArrowRightOutlineIcon';
      