import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChevronDownIcon: FC<IconInterface> = function ChevronDownIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDownIcon ${className}`;
      return (
        <Icon alt="ChevronDown" className={classNames} {...propsRest}>
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />

        </Icon>
      );
    };
    ChevronDownIcon.displayName = 'ChevronDownIcon';
      