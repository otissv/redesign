import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CropIcon: FC<IconInterface> = function CropIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CropIcon ${className}`;
      return (
        <Icon alt="Crop" className={classNames} {...propsRest}>
          <path d="M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z" />

        </Icon>
      );
    };
    CropIcon.displayName = 'CropIcon';
      