import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ZipDiskIcon: FC<IconInterface> = function ZipDiskIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ZipDiskIcon ${className}`;
      return (
        <Icon alt="ZipDisk" className={classNames} {...propsRest}>
          <path d="M7,3L3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5L17,3V5A1,1 0 0,1 16,6H10A1,1 0 0,1 9,5V3H7M8,10H16A1,1 0 0,1 17,11V19H7V11A1,1 0 0,1 8,10Z" />

        </Icon>
      );
    };
    ZipDiskIcon.displayName = 'ZipDiskIcon';
      