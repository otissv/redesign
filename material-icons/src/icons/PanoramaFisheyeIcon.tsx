import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PanoramaFisheyeIcon: FC<IconInterface> = function PanoramaFisheyeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PanoramaFisheyeIcon ${className}`;
      return (
        <Icon alt="PanoramaFisheye" className={classNames} {...propsRest}>
          <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2Z" />

        </Icon>
      );
    };
    PanoramaFisheyeIcon.displayName = 'PanoramaFisheyeIcon';
      