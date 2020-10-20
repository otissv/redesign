import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PillarIcon: FC<IconInterface> = function PillarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PillarIcon ${className}`;
      return (
        <Icon alt="Pillar" className={classNames} {...propsRest}>
          <path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" />

        </Icon>
      );
    };
    PillarIcon.displayName = 'PillarIcon';
      