import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HumanIcon: FC<IconInterface> = function HumanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanIcon ${className}`;
      return (
        <Icon alt="Human" className={classNames} {...propsRest}>
          <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />

        </Icon>
      );
    };
    HumanIcon.displayName = 'HumanIcon';
      