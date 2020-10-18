import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const OnepasswordIcon: FC<IconInterface> = function OnepasswordIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OnepasswordIcon ${className}`;
      return (
        <Icon alt="Onepassword" className={classNames} {...propsRest}>
          <path d="M12,1C5.92,1 1,5.92 1,12C1,18.08 5.92,23 12,23C18.08,23 23,18.08 23,12C23,5.92 18.08,1 12,1M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M13,13.5C13,14.13 13.4,14.7 14,14.91V18H10V11.91C10.78,11.64 11.19,10.8 10.93,10C10.78,9.58 10.44,9.24 10,9.09V6H14V12.09C13.4,12.3 13,12.87 13,13.5Z" />

        </Icon>
      );
    };
    OnepasswordIcon.displayName = 'OnepasswordIcon';
      