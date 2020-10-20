import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LightningBoltOutlineIcon: FC<IconInterface> = function LightningBoltOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LightningBoltOutlineIcon ${className}`;
      return (
        <Icon alt="LightningBoltOutline" className={classNames} {...propsRest}>
          <path d="M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z" />

        </Icon>
      );
    };
    LightningBoltOutlineIcon.displayName = 'LightningBoltOutlineIcon';
      