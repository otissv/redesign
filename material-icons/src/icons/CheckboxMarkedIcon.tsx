import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckboxMarkedIcon: FC<IconInterface> = function CheckboxMarkedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxMarkedIcon ${className}`;
      return (
        <Icon alt="CheckboxMarked" className={classNames} {...propsRest}>
          <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />

        </Icon>
      );
    };
    CheckboxMarkedIcon.displayName = 'CheckboxMarkedIcon';
      