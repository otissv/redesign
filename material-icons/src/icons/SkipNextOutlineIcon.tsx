import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipNextOutlineIcon: FC<IconInterface> = function SkipNextOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipNextOutlineIcon ${className}`;
      return (
        <Icon alt="SkipNextOutline" className={classNames} {...propsRest}>
          <path d="M6,18L14.5,12L6,6M8,9.86L11.03,12L8,14.14M16,6H18V18H16" />

        </Icon>
      );
    };
    SkipNextOutlineIcon.displayName = 'SkipNextOutlineIcon';
      