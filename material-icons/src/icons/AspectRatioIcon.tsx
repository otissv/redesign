import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AspectRatioIcon: FC<IconInterface> = function AspectRatioIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AspectRatioIcon ${className}`;
      return (
        <Icon alt="AspectRatio" className={classNames} {...propsRest}>
          <path d="M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z" />

        </Icon>
      );
    };
    AspectRatioIcon.displayName = 'AspectRatioIcon';
      