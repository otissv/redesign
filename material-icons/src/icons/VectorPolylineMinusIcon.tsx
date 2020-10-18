import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VectorPolylineMinusIcon: FC<IconInterface> = function VectorPolylineMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VectorPolylineMinusIcon ${className}`;
      return (
        <Icon alt="VectorPolylineMinus" className={classNames} {...propsRest}>
          <path d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M8 17H10V19H8V17M15 18V20H23V18H15Z" />

        </Icon>
      );
    };
    VectorPolylineMinusIcon.displayName = 'VectorPolylineMinusIcon';
      