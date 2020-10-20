import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowDownIcon: FC<IconInterface> = function ArrowDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownIcon ${className}`;
      return (
        <Icon alt="ArrowDown" className={classNames} {...propsRest}>
          <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />

        </Icon>
      );
    };
    ArrowDownIcon.displayName = 'ArrowDownIcon';
      