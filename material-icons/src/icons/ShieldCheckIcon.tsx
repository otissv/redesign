import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShieldCheckIcon: FC<IconInterface> = function ShieldCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldCheckIcon ${className}`;
      return (
        <Icon alt="ShieldCheck" className={classNames} {...propsRest}>
          <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />

        </Icon>
      );
    };
    ShieldCheckIcon.displayName = 'ShieldCheckIcon';
      