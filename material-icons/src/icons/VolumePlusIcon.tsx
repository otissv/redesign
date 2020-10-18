import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VolumePlusIcon: FC<IconInterface> = function VolumePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VolumePlusIcon ${className}`;
      return (
        <Icon alt="VolumePlus" className={classNames} {...propsRest}>
          <path d="M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z" />

        </Icon>
      );
    };
    VolumePlusIcon.displayName = 'VolumePlusIcon';
      