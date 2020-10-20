import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CameraMeteringSpotIcon: FC<IconInterface> = function CameraMeteringSpotIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraMeteringSpotIcon ${className}`;
      return (
        <Icon alt="CameraMeteringSpot" className={classNames} {...propsRest}>
          <path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H20V6H4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5Z" />

        </Icon>
      );
    };
    CameraMeteringSpotIcon.displayName = 'CameraMeteringSpotIcon';
      