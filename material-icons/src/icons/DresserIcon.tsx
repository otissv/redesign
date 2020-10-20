import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DresserIcon: FC<IconInterface> = function DresserIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DresserIcon ${className}`;
      return (
        <Icon alt="Dresser" className={classNames} {...propsRest}>
          <path d="M4 3C2.9 3 2 3.9 2 5V8H22V5C22 3.9 21.11 3 20 3H4M10 5H14V6H10V5M2 9V14H22V9H2M10 11H14V12H10V11M2 15V18C2 19.11 2.9 20 4 20V21H6V20H18V21H20V20C21.11 20 22 19.11 22 18V15H2M10 17H14V18H10V17Z" />

        </Icon>
      );
    };
    DresserIcon.displayName = 'DresserIcon';
      