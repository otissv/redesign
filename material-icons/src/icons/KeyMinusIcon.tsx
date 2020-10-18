import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const KeyMinusIcon: FC<IconInterface> = function KeyMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyMinusIcon ${className}`;
      return (
        <Icon alt="KeyMinus" className={classNames} {...propsRest}>
          <path d="M6.5,3C8.46,3 10.13,4.25 10.74,6H22V9H18V12H15V9H10.74C10.13,10.75 8.46,12 6.5,12C4,12 2,10 2,7.5C2,5 4,3 6.5,3M6.5,6A1.5,1.5 0 0,0 5,7.5A1.5,1.5 0 0,0 6.5,9A1.5,1.5 0 0,0 8,7.5A1.5,1.5 0 0,0 6.5,6M8,17H16V19H8V17Z" />

        </Icon>
      );
    };
    KeyMinusIcon.displayName = 'KeyMinusIcon';
      