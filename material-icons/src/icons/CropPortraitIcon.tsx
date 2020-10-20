import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CropPortraitIcon: FC<IconInterface> = function CropPortraitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CropPortraitIcon ${className}`;
      return (
        <Icon alt="CropPortrait" className={classNames} {...propsRest}>
          <path d="M17,19H7V5H17M17,3H7A2,2 0 0,0 5,5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z" />

        </Icon>
      );
    };
    CropPortraitIcon.displayName = 'CropPortraitIcon';
      