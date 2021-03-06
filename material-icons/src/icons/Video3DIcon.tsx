import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const Video3DIcon: FC<IconInterface> = function Video3DIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Video3DIcon ${className}`;
      return (
        <Icon alt="Video3D" className={classNames} {...propsRest}>
          <path d="M5,7H9A2,2 0 0,1 11,9V15A2,2 0 0,1 9,17H5V15H9V13H6V11H9V9H5V7M13,7H16A3,3 0 0,1 19,10V14A3,3 0 0,1 16,17H13V7M16,15A1,1 0 0,0 17,14V10A1,1 0 0,0 16,9H15V15H16Z" />

        </Icon>
      );
    };
    Video3DIcon.displayName = 'Video3DIcon';
      