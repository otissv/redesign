import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MathTanIcon: FC<IconInterface> = function MathTanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MathTanIcon ${className}`;
      return (
        <Icon alt="MathTan" className={classNames} {...propsRest}>
          <path d="M2,7V9H4V17H6V9H8V7H2M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9M16,7V17H18V12L20,17H22V7H20V12L18,7H16Z" />

        </Icon>
      );
    };
    MathTanIcon.displayName = 'MathTanIcon';
      