import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShieldOffOutlineIcon: FC<IconInterface> = function ShieldOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldOffOutlineIcon ${className}`;
      return (
        <Icon alt="ShieldOffOutline" className={classNames} {...propsRest}>
          <path d="M1,4.27L3,6.27V11C3,16.55 6.84,21.74 12,23C13.87,22.54 15.57,21.56 16.97,20.24L19.23,22.5L20.5,21.22L2.28,3L1,4.27M12,21C8.25,20 5,15.54 5,11.22V8.27L15.59,18.86C14.53,19.89 13.3,20.65 12,21M21,5V11C21,13.28 20.35,15.5 19.23,17.4L17.77,15.95C18.54,14.5 19,12.84 19,11.22V6.3L12,3.18L7.16,5.34L5.65,3.82L12,1L21,5Z" />

        </Icon>
      );
    };
    ShieldOffOutlineIcon.displayName = 'ShieldOffOutlineIcon';
      