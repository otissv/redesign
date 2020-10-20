import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CompassOffOutlineIcon: FC<IconInterface> = function CompassOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CompassOffOutlineIcon ${className}`;
      return (
        <Icon alt="CompassOffOutline" className={classNames} {...propsRest}>
          <path d="M1,3.5L2.28,2.25L21.75,21.72L20.5,23L17.7,20.22C16.08,21.34 14.12,22 12,22A10,10 0 0,1 2,12C2,9.88 2.66,7.92 3.78,6.3L1,3.5M7,17L9.39,11.91L5.23,7.74C4.45,9 4,10.44 4,12A8,8 0 0,0 12,20C13.56,20 15,19.55 16.26,18.77L12.09,14.61L7,17M17,7L14.62,12.05L11.95,9.38L17,7M12,2A10,10 0 0,1 22,12C22,14.1 21.35,16.06 20.24,17.67L18.8,16.22C19.56,15 20,13.55 20,12A8,8 0 0,0 12,4C10.45,4 9,4.44 7.78,5.2L6.33,3.76C7.94,2.65 9.9,2 12,2Z" />

        </Icon>
      );
    };
    CompassOffOutlineIcon.displayName = 'CompassOffOutlineIcon';
      