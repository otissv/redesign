import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShieldIcon: FC<IconInterface> = function ShieldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldIcon ${className}`;
      return (
        <Icon alt="Shield" className={classNames} {...propsRest}>
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />

        </Icon>
      );
    };
    ShieldIcon.displayName = 'ShieldIcon';
      