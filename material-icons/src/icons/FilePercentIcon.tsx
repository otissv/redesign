import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FilePercentIcon: FC<IconInterface> = function FilePercentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FilePercentIcon ${className}`;
      return (
        <Icon alt="FilePercent" className={classNames} {...propsRest}>
          <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M7.37,20L15,12.35L13.65,11L6,18.65L7.37,20M13,9H18.5L13,3.5V9M7.5,11A1.5,1.5 0 0,0 6,12.5A1.5,1.5 0 0,0 7.5,14A1.5,1.5 0 0,0 9,12.5A1.5,1.5 0 0,0 7.5,11M13.5,17A1.5,1.5 0 0,0 12,18.5A1.5,1.5 0 0,0 13.5,20A1.5,1.5 0 0,0 15,18.5A1.5,1.5 0 0,0 13.5,17Z" />

        </Icon>
      );
    };
    FilePercentIcon.displayName = 'FilePercentIcon';
      