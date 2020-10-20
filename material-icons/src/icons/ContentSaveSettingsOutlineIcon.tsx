import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ContentSaveSettingsOutlineIcon: FC<IconInterface> = function ContentSaveSettingsOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContentSaveSettingsOutlineIcon ${className}`;
      return (
        <Icon alt="ContentSaveSettingsOutline" className={classNames} {...propsRest}>
          <path d="M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22M17 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6L17 2M19 18H5V4H16.17L19 6.83V18M12 11C10.34 11 9 12.34 9 14S10.34 17 12 17 15 15.66 15 14 13.66 11 12 11M6 5H15V9H6V5Z" />

        </Icon>
      );
    };
    ContentSaveSettingsOutlineIcon.displayName = 'ContentSaveSettingsOutlineIcon';
      