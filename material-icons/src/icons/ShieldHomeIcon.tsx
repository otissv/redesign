import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShieldHomeIcon: FC<IconInterface> = function ShieldHomeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldHomeIcon ${className}`;
      return (
        <Icon alt="ShieldHome" className={classNames} {...propsRest}>
          <path d="M11,13H13V16H16V11H18L12,6L6,11H8V16H11V13M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z" />

        </Icon>
      );
    };
    ShieldHomeIcon.displayName = 'ShieldHomeIcon';
      