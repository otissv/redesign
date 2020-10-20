import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TicketOutlineIcon: FC<IconInterface> = function TicketOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TicketOutlineIcon ${className}`;
      return (
        <Icon alt="TicketOutline" className={classNames} {...propsRest}>
          <path d="M4,4A2,2 0 0,0 2,6V10A2,2 0 0,1 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12A2,2 0 0,1 22,10V6A2,2 0 0,0 20,4H4M4,6H20V8.54C18.76,9.25 18,10.57 18,12C18,13.43 18.76,14.75 20,15.46V18H4V15.46C5.24,14.75 6,13.43 6,12C6,10.57 5.24,9.25 4,8.54V6Z" />

        </Icon>
      );
    };
    TicketOutlineIcon.displayName = 'TicketOutlineIcon';
      