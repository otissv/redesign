import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ApplicationIcon: FC<IconInterface> = function ApplicationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ApplicationIcon ${className}`;
      return (
        <Icon alt="Application" className={classNames} {...propsRest}>
          <path d="M19,4C20.11,4 21,4.9 21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V6A2,2 0 0,1 5,4H19M19,18V8H5V18H19Z" />

        </Icon>
      );
    };
    ApplicationIcon.displayName = 'ApplicationIcon';
      