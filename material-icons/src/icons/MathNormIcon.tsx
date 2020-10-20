import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MathNormIcon: FC<IconInterface> = function MathNormIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MathNormIcon ${className}`;
      return (
        <Icon alt="MathNorm" className={classNames} {...propsRest}>
          <path d="M14 21V3H16V21H14M8 21V3H10V21H8Z" />

        </Icon>
      );
    };
    MathNormIcon.displayName = 'MathNormIcon';
      