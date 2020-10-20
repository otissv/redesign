import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ScriptIcon: FC<IconInterface> = function ScriptIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ScriptIcon ${className}`;
      return (
        <Icon alt="Script" className={classNames} {...propsRest}>
          <path d="M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2H8C6.3,2 5,3.3 5,5V16H16V17C16,17.6 16.4,18 17,18H18V5C18,4.4 18.4,4 19,4C19.6,4 20,4.4 20,5V6H22V5C22,3.3 20.7,2 19,2Z" />

        </Icon>
      );
    };
    ScriptIcon.displayName = 'ScriptIcon';
      