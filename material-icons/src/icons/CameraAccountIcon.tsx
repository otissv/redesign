import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CameraAccountIcon: FC<IconInterface> = function CameraAccountIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraAccountIcon ${className}`;
      return (
        <Icon alt="CameraAccount" className={classNames} {...propsRest}>
          <path d="M4,5H7L9,3H15L17,5H20A2,2 0 0,1 22,7V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V7A2,2 0 0,1 4,5M16,17V16C16,14.67 13.33,14 12,14C10.67,14 8,14.67 8,16V17H16M12,9A2,2 0 0,0 10,11A2,2 0 0,0 12,13A2,2 0 0,0 14,11A2,2 0 0,0 12,9Z" />

        </Icon>
      );
    };
    CameraAccountIcon.displayName = 'CameraAccountIcon';
      