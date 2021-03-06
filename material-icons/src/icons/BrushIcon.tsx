import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BrushIcon: FC<IconInterface> = function BrushIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BrushIcon ${className}`;
      return (
        <Icon alt="Brush" className={classNames} {...propsRest}>
          <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />

        </Icon>
      );
    };
    BrushIcon.displayName = 'BrushIcon';
      