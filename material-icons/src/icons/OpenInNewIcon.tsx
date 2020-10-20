import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const OpenInNewIcon: FC<IconInterface> = function OpenInNewIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OpenInNewIcon ${className}`;
      return (
        <Icon alt="OpenInNew" className={classNames} {...propsRest}>
          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />

        </Icon>
      );
    };
    OpenInNewIcon.displayName = 'OpenInNewIcon';
      