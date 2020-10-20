import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlipToFrontIcon: FC<IconInterface> = function FlipToFrontIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlipToFrontIcon ${className}`;
      return (
        <Icon alt="FlipToFront" className={classNames} {...propsRest}>
          <path d="M7,21H9V19H7M11,21H13V19H11M19,15H9V5H19M19,3H9C7.89,3 7,3.89 7,5V15A2,2 0 0,0 9,17H14L18,17H19A2,2 0 0,0 21,15V5C21,3.89 20.1,3 19,3M15,21H17V19H15M3,9H5V7H3M5,21V19H3A2,2 0 0,0 5,21M3,17H5V15H3M3,13H5V11H3V13Z" />

        </Icon>
      );
    };
    FlipToFrontIcon.displayName = 'FlipToFrontIcon';
      