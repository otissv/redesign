import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NailIcon: FC<IconInterface> = function NailIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NailIcon ${className}`;
      return (
        <Icon alt="Nail" className={classNames} {...propsRest}>
          <path d="M13.5,5V16L12,22L10.5,16V5H13.5M17,2H7V4H17V2Z" />

        </Icon>
      );
    };
    NailIcon.displayName = 'NailIcon';
      