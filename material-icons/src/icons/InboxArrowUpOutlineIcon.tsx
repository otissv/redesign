import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const InboxArrowUpOutlineIcon: FC<IconInterface> = function InboxArrowUpOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InboxArrowUpOutlineIcon ${className}`;
      return (
        <Icon alt="InboxArrowUpOutline" className={classNames} {...propsRest}>
          <path d="M19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M5 19V17H8.13A4.13 4.13 0 0 0 9.4 19M19 19H14.6A4.13 4.13 0 0 0 15.87 17H19M19 15H14V16A2 2 0 0 1 10 16V15H5V5H19M8 11H10V14H14V11H16L12 7" />

        </Icon>
      );
    };
    InboxArrowUpOutlineIcon.displayName = 'InboxArrowUpOutlineIcon';
      