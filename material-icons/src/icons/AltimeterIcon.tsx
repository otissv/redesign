import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AltimeterIcon: FC<IconInterface> = function AltimeterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AltimeterIcon ${className}`;
      return (
        <Icon alt="Altimeter" className={classNames} {...propsRest}>
          <path d="M7,3V5H17V3H7M9,7V9H15V7H9M2,7.96V16.04L6.03,12L2,7.96M22.03,7.96L18,12L22.03,16.04V7.96M7,11V13H17V11H7M9,15V17H15V15H9M7,19V21H17V19H7Z" />

        </Icon>
      );
    };
    AltimeterIcon.displayName = 'AltimeterIcon';
      