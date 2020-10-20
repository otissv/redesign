import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TuneVerticalIcon: FC<IconInterface> = function TuneVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TuneVerticalIcon ${className}`;
      return (
        <Icon alt="TuneVertical" className={classNames} {...propsRest}>
          <path d="M7 3H5V9H7V3M19 3H17V13H19V3M3 13H5V21H7V13H9V11H3V13M15 7H13V3H11V7H9V9H15V7M11 21H13V11H11V21M15 15V17H17V21H19V17H21V15H15Z" />

        </Icon>
      );
    };
    TuneVerticalIcon.displayName = 'TuneVerticalIcon';
      