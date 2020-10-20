import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PencilBoxIcon: FC<IconInterface> = function PencilBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PencilBoxIcon ${className}`;
      return (
        <Icon alt="PencilBox" className={classNames} {...propsRest}>
          <path d="M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35C16.92,9.14 16.92,8.79 16.7,8.58L15.42,7.3C15.21,7.08 14.86,7.08 14.65,7.3L13.65,8.3L15.7,10.35L16.7,9.35M7,14.94V17H9.06L15.12,10.94L13.06,8.88L7,14.94Z" />

        </Icon>
      );
    };
    PencilBoxIcon.displayName = 'PencilBoxIcon';
      