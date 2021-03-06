import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BinocularsIcon: FC<IconInterface> = function BinocularsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BinocularsIcon ${className}`;
      return (
        <Icon alt="Binoculars" className={classNames} {...propsRest}>
          <path d="M11,6H13V13H11V6M9,20A1,1 0 0,1 8,21H5A1,1 0 0,1 4,20V15L6,6H10V13A1,1 0 0,1 9,14V20M10,5H7V3H10V5M15,20V14A1,1 0 0,1 14,13V6H18L20,15V20A1,1 0 0,1 19,21H16A1,1 0 0,1 15,20M14,5V3H17V5H14Z" />

        </Icon>
      );
    };
    BinocularsIcon.displayName = 'BinocularsIcon';
      