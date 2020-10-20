import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneLinkOffIcon: FC<IconInterface> = function CellphoneLinkOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneLinkOffIcon ${className}`;
      return (
        <Icon alt="CellphoneLinkOff" className={classNames} {...propsRest}>
          <path d="M23,8H17A1,1 0 0,0 16,9V13.18L18,15.18V10H22V17H19.82L22.82,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6.27L14.73,17H4V6.27M1.92,1.65L0.65,2.92L2.47,4.74C2.18,5.08 2,5.5 2,6V17H0V20H17.73L20.08,22.35L21.35,21.08L3.89,3.62L1.92,1.65M22,6V4H6.82L8.82,6H22Z" />

        </Icon>
      );
    };
    CellphoneLinkOffIcon.displayName = 'CellphoneLinkOffIcon';
      