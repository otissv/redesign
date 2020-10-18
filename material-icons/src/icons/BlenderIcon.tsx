import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BlenderIcon: FC<IconInterface> = function BlenderIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BlenderIcon ${className}`;
      return (
        <Icon alt="Blender" className={classNames} {...propsRest}>
          <path d="M19,5H17.8L18,2H4L5,4H6L6.94,16.19L5,22H19L17.06,16.17L17.2,14H19C20.3,14 21,12.97 21,12V7C21,5.7 19.97,5 19,5M12,20A1.5,1.5 0 0,1 10.5,18.5A1.5,1.5 0 0,1 12,17A1.5,1.5 0 0,1 13.5,18.5A1.5,1.5 0 0,1 12,20M15.13,15H8.85L8.7,13H13V12H8.62L8.47,10H13V9H8.39L8.24,7H13V6H8.16L8,4H15.86L15.13,15M19,12H17.33L17.67,7H19V12Z" />

        </Icon>
      );
    };
    BlenderIcon.displayName = 'BlenderIcon';
      