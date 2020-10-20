import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlagTriangleIcon: FC<IconInterface> = function FlagTriangleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagTriangleIcon ${className}`;
      return (
        <Icon alt="FlagTriangle" className={classNames} {...propsRest}>
          <path d="M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z" />

        </Icon>
      );
    };
    FlagTriangleIcon.displayName = 'FlagTriangleIcon';
      