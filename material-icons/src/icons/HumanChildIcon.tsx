import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HumanChildIcon: FC<IconInterface> = function HumanChildIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanChildIcon ${className}`;
      return (
        <Icon alt="HumanChild" className={classNames} {...propsRest}>
          <path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M11,22H8V16H6V9H18V16H16V22H13V18H11V22Z" />

        </Icon>
      );
    };
    HumanChildIcon.displayName = 'HumanChildIcon';
      