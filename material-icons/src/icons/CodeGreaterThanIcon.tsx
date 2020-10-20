import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CodeGreaterThanIcon: FC<IconInterface> = function CodeGreaterThanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CodeGreaterThanIcon ${className}`;
      return (
        <Icon alt="CodeGreaterThan" className={classNames} {...propsRest}>
          <path d="M10.41,7.41L15,12L10.41,16.6L9,15.18L12.18,12L9,8.82M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />

        </Icon>
      );
    };
    CodeGreaterThanIcon.displayName = 'CodeGreaterThanIcon';
      