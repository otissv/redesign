import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckboxIntermediateIcon: FC<IconInterface> = function CheckboxIntermediateIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxIntermediateIcon ${className}`;
      return (
        <Icon alt="CheckboxIntermediate" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" />

        </Icon>
      );
    };
    CheckboxIntermediateIcon.displayName = 'CheckboxIntermediateIcon';
      