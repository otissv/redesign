import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneLinkIcon: FC<IconInterface> = function CellphoneLinkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneLinkIcon ${className}`;
      return (
        <Icon alt="CellphoneLink" className={classNames} {...propsRest}>
          <path d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z" />

        </Icon>
      );
    };
    CellphoneLinkIcon.displayName = 'CellphoneLinkIcon';
      