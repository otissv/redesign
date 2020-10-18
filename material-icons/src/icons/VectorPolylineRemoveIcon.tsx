import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VectorPolylineRemoveIcon: FC<IconInterface> = function VectorPolylineRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VectorPolylineRemoveIcon ${className}`;
      return (
        <Icon alt="VectorPolylineRemove" className={classNames} {...propsRest}>
          <path d="M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5M16 5V9.6L10.6 15H9.1L7.1 9H8V3H2V9H5L7 15H6V21H12V16.4L17.4 11H22V5H16M6 7H4V5H6V7M10 19H8V17H10V19M20 9H18V7H20V9" />

        </Icon>
      );
    };
    VectorPolylineRemoveIcon.displayName = 'VectorPolylineRemoveIcon';
      