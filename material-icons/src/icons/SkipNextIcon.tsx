import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SkipNextIcon: FC<IconInterface> = function SkipNextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipNextIcon ${className}`;
      return (
        <Icon alt="SkipNext" className={classNames} {...propsRest}>
          <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />

        </Icon>
      );
    };
    SkipNextIcon.displayName = 'SkipNextIcon';
      