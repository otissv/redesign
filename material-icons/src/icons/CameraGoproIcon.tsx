import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CameraGoproIcon: FC<IconInterface> = function CameraGoproIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraGoproIcon ${className}`;
      return (
        <Icon alt="CameraGopro" className={classNames} {...propsRest}>
          <path d="M20,5H15A2,2 0 0,0 13,7V12A2,2 0 0,0 15,14H20A2,2 0 0,0 22,12V7A2,2 0 0,0 20,5M17.5,12.5A3,3 0 0,1 14.5,9.5A3,3 0 0,1 17.5,6.5A3,3 0 0,1 20.5,9.5A3,3 0 0,1 17.5,12.5M17.5,11A1.5,1.5 0 0,1 16,9.5A1.5,1.5 0 0,1 17.5,8A1.5,1.5 0 0,1 19,9.5A1.5,1.5 0 0,1 17.5,11M12,15V5H4A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V15H12M10,12H4V7H10V12Z" />

        </Icon>
      );
    };
    CameraGoproIcon.displayName = 'CameraGoproIcon';
      