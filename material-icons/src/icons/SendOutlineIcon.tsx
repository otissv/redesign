import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SendOutlineIcon: FC<IconInterface> = function SendOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendOutlineIcon ${className}`;
      return (
        <Icon alt="SendOutline" className={classNames} {...propsRest}>
          <path d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z" />

        </Icon>
      );
    };
    SendOutlineIcon.displayName = 'SendOutlineIcon';
      