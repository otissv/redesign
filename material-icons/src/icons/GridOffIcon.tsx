import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GridOffIcon: FC<IconInterface> = function GridOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GridOffIcon ${className}`;
      return (
        <Icon alt="GridOff" className={classNames} {...propsRest}>
          <path d="M0,2.77L1.28,1.5L22.5,22.72L21.23,24L19.23,22H4C2.92,22 2,21.1 2,20V4.77L0,2.77M10,4V7.68L8,5.68V4H6.32L4.32,2H20A2,2 0 0,1 22,4V19.7L20,17.7V16H18.32L16.32,14H20V10H16V13.68L14,11.68V10H12.32L10.32,8H14V4H10M16,4V8H20V4H16M16,20H17.23L16,18.77V20M4,8H5.23L4,6.77V8M10,14H11.23L10,12.77V14M14,20V16.77L13.23,16H10V20H14M8,20V16H4V20H8M8,14V10.77L7.23,10H4V14H8Z" />

        </Icon>
      );
    };
    GridOffIcon.displayName = 'GridOffIcon';
      