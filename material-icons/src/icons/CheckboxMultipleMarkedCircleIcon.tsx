import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CheckboxMultipleMarkedCircleIcon: FC<IconInterface> = function CheckboxMultipleMarkedCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxMultipleMarkedCircleIcon ${className}`;
      return (
        <Icon alt="CheckboxMultipleMarkedCircle" className={classNames} {...propsRest}>
          <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />

        </Icon>
      );
    };
    CheckboxMultipleMarkedCircleIcon.displayName = 'CheckboxMultipleMarkedCircleIcon';
      