import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormSelectIcon: FC<IconInterface> = function FormSelectIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormSelectIcon ${className}`;
      return (
        <Icon alt="FormSelect" className={classNames} {...propsRest}>
          <path d="M15 5H18L16.5 7L15 5M5 2H19C20.11 2 21 2.9 21 4V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V4C3 2.9 3.9 2 5 2M5 4V8H19V4H5M5 20H19V10H5V20M7 12H17V14H7V12M7 16H17V18H7V16Z" />

        </Icon>
      );
    };
    FormSelectIcon.displayName = 'FormSelectIcon';
      