import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ExponentBoxIcon: FC<IconInterface> = function ExponentBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ExponentBoxIcon ${className}`;
      return (
        <Icon alt="ExponentBox" className={classNames} {...propsRest}>
          <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M13.76,6H15.39L16.5,8.6L17.59,6H19.24C19.24,6 17.5,10.57 16.46,12.32C16.08,12.89 15.35,13.27 14.5,13.25V11.75C14.96,11.76 15.25,11.5 15.5,11.13C15.61,11 15.68,10.8 15.74,10.64L13.76,6M6.41,9.59L9.21,12.38L12,9.59L13.41,11L10.62,13.79L13.41,16.59L12,18L9.21,15.21L6.41,18L5,16.59L7.79,13.79L5,11L6.41,9.59Z" />

        </Icon>
      );
    };
    ExponentBoxIcon.displayName = 'ExponentBoxIcon';
      