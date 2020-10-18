import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CameraImageIcon: FC<IconInterface> = function CameraImageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraImageIcon ${className}`;
      return (
        <Icon alt="CameraImage" className={classNames} {...propsRest}>
          <path d="M4,5H7L9,3H15L17,5H20A2,2 0 0,1 22,7V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V7A2,2 0 0,1 4,5M13.09,9.45L11.05,12.18L12.6,14.25L11.73,14.91L9.27,11.64L6,16H18L13.09,9.45Z" />

        </Icon>
      );
    };
    CameraImageIcon.displayName = 'CameraImageIcon';
      