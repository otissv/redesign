import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EqualizerOutlineIcon: FC<IconInterface> = function EqualizerOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EqualizerOutlineIcon ${className}`;
      return (
        <Icon alt="EqualizerOutline" className={classNames} {...propsRest}>
          <path d="M15,21H9V3H15V21M11,19H13V5H11V19M8,21H2V11H8V21M4,19H6V13H4V19M22,21H16V8H22V21M18,19H20V10H18V19Z" />

        </Icon>
      );
    };
    EqualizerOutlineIcon.displayName = 'EqualizerOutlineIcon';
      