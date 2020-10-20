import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShieldHalfFullIcon: FC<IconInterface> = function ShieldHalfFullIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldHalfFullIcon ${className}`;
      return (
        <Icon alt="ShieldHalfFull" className={classNames} {...propsRest}>
          <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />

        </Icon>
      );
    };
    ShieldHalfFullIcon.displayName = 'ShieldHalfFullIcon';
      