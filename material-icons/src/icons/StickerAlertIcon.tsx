import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StickerAlertIcon: FC<IconInterface> = function StickerAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StickerAlertIcon ${className}`;
      return (
        <Icon alt="StickerAlert" className={classNames} {...propsRest}>
          <path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M13 16H11V14H13V16M13 12H11V8H13V12M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z" />

        </Icon>
      );
    };
    StickerAlertIcon.displayName = 'StickerAlertIcon';
      