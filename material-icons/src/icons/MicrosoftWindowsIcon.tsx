import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MicrosoftWindowsIcon: FC<IconInterface> = function MicrosoftWindowsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftWindowsIcon ${className}`;
      return (
        <Icon alt="MicrosoftWindows" className={classNames} {...propsRest}>
          <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />

        </Icon>
      );
    };
    MicrosoftWindowsIcon.displayName = 'MicrosoftWindowsIcon';
      