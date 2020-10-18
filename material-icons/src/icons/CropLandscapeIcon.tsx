import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CropLandscapeIcon: FC<IconInterface> = function CropLandscapeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CropLandscapeIcon ${className}`;
      return (
        <Icon alt="CropLandscape" className={classNames} {...propsRest}>
          <path d="M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z" />

        </Icon>
      );
    };
    CropLandscapeIcon.displayName = 'CropLandscapeIcon';
      