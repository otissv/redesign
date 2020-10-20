import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DivingScubaFlagIcon: FC<IconInterface> = function DivingScubaFlagIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DivingScubaFlagIcon ${className}`;
      return (
        <Icon alt="DivingScubaFlag" className={classNames} {...propsRest}>
          <path d="M2,6L19,20H2V6M5,4L22,18V4H5Z" />

        </Icon>
      );
    };
    DivingScubaFlagIcon.displayName = 'DivingScubaFlagIcon';
      