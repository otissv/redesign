import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipPreviousOutlineIcon: FC<IconInterface> = function SkipPreviousOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipPreviousOutlineIcon ${className}`;
      return (
        <Icon alt="SkipPreviousOutline" className={classNames} {...propsRest}>
          <path d="M6,6H8V18H6M9.5,12L18,18V6M16,14.14L12.97,12L16,9.86V14.14Z" />

        </Icon>
      );
    };
    SkipPreviousOutlineIcon.displayName = 'SkipPreviousOutlineIcon';
      