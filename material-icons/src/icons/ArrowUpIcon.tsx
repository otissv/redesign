import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpIcon: FC<IconInterface> = function ArrowUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpIcon ${className}`;
      return (
        <Icon alt="ArrowUp" className={classNames} {...propsRest}>
          <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />

        </Icon>
      );
    };
    ArrowUpIcon.displayName = 'ArrowUpIcon';
      