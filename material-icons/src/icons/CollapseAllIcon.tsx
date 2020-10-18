import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CollapseAllIcon: FC<IconInterface> = function CollapseAllIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CollapseAllIcon ${className}`;
      return (
        <Icon alt="CollapseAll" className={classNames} {...propsRest}>
          <path d="M14,4H4V14H2V4A2,2 0 0,1 4,2H14V4M18,6H8A2,2 0 0,0 6,8V18H8V8H18V6M22,12V20A2,2 0 0,1 20,22H12A2,2 0 0,1 10,20V12A2,2 0 0,1 12,10H20A2,2 0 0,1 22,12M20,15H12V17H20V15Z" />

        </Icon>
      );
    };
    CollapseAllIcon.displayName = 'CollapseAllIcon';
      