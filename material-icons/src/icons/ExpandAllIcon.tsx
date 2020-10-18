import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ExpandAllIcon: FC<IconInterface> = function ExpandAllIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExpandAllIcon ${className}`;
      return (
        <Icon alt="ExpandAll" className={classNames} {...propsRest}>
          <path d="M18,8H8V18H6V8A2,2 0 0,1 8,6H18V8M14,2H4A2,2 0 0,0 2,4V14H4V4H14V2M22,12V20A2,2 0 0,1 20,22H12A2,2 0 0,1 10,20V12A2,2 0 0,1 12,10H20A2,2 0 0,1 22,12M20,15H17V12H15V15H12V17H15V20H17V17H20V15Z" />

        </Icon>
      );
    };
    ExpandAllIcon.displayName = 'ExpandAllIcon';
      