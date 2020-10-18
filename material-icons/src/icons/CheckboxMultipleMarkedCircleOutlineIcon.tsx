import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CheckboxMultipleMarkedCircleOutlineIcon: FC<IconInterface> = function CheckboxMultipleMarkedCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CheckboxMultipleMarkedCircleOutlineIcon ${className}`;
      return (
        <Icon alt="CheckboxMultipleMarkedCircleOutline" className={classNames} {...propsRest}>
          <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />

        </Icon>
      );
    };
    CheckboxMultipleMarkedCircleOutlineIcon.displayName = 'CheckboxMultipleMarkedCircleOutlineIcon';
      