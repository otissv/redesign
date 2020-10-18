import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HelpBoxIcon: FC<IconInterface> = function HelpBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HelpBoxIcon ${className}`;
      return (
        <Icon alt="HelpBox" className={classNames} {...propsRest}>
          <path d="M11,18H13V16H11V18M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    HelpBoxIcon.displayName = 'HelpBoxIcon';
      