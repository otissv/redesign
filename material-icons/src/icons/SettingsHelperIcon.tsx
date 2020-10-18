import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SettingsHelperIcon: FC<IconInterface> = function SettingsHelperIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SettingsHelperIcon ${className}`;
      return (
        <Icon alt="SettingsHelper" className={classNames} {...propsRest}>
          <path d="M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />

        </Icon>
      );
    };
    SettingsHelperIcon.displayName = 'SettingsHelperIcon';
      