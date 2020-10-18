import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MathNormBoxIcon: FC<IconInterface> = function MathNormBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MathNormBoxIcon ${className}`;
      return (
        <Icon alt="MathNormBox" className={classNames} {...propsRest}>
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M10 18H8V6H10V18M16 18H14V6H16V18Z" />

        </Icon>
      );
    };
    MathNormBoxIcon.displayName = 'MathNormBoxIcon';
      