import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckboxMarkedCircleIcon: FC<IconInterface> = function CheckboxMarkedCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxMarkedCircleIcon ${className}`;
      return (
        <Icon alt="CheckboxMarkedCircle" className={classNames} {...propsRest}>
          <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    CheckboxMarkedCircleIcon.displayName = 'CheckboxMarkedCircleIcon';
      