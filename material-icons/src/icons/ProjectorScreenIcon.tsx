import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ProjectorScreenIcon: FC<IconInterface> = function ProjectorScreenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ProjectorScreenIcon ${className}`;
      return (
        <Icon alt="ProjectorScreen" className={classNames} {...propsRest}>
          <path d="M4,2A1,1 0 0,0 3,3V4A1,1 0 0,0 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20A1,1 0 0,0 21,4V3A1,1 0 0,0 20,2H4Z" />

        </Icon>
      );
    };
    ProjectorScreenIcon.displayName = 'ProjectorScreenIcon';
      