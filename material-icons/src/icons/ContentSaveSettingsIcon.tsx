import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ContentSaveSettingsIcon: FC<IconInterface> = function ContentSaveSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContentSaveSettingsIcon ${className}`;
      return (
        <Icon alt="ContentSaveSettings" className={classNames} {...propsRest}>
          <path d="M15,8V4H5V8H15M12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18M17,2L21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V4A2,2 0 0,1 5,2H17M11,22H13V24H11V22M7,22H9V24H7V22M15,22H17V24H15V22Z" />

        </Icon>
      );
    };
    ContentSaveSettingsIcon.displayName = 'ContentSaveSettingsIcon';
      