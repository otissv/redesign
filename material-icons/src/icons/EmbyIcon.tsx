import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmbyIcon: FC<IconInterface> = function EmbyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmbyIcon ${className}`;
      return (
        <Icon alt="Emby" className={classNames} {...propsRest}>
          <path d="M11,2L6,7L7,8L2,13L7,18L8,17L13,22L18,17L17,16L22,11L17,6L16,7L11,2M10,8.5L16,12L10,15.5V8.5Z" />

        </Icon>
      );
    };
    EmbyIcon.displayName = 'EmbyIcon';
      