import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ContentSaveAlertOutlineIcon: FC<IconInterface> = function ContentSaveAlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContentSaveAlertOutlineIcon ${className}`;
      return (
        <Icon alt="ContentSaveAlertOutline" className={classNames} {...propsRest}>
          <path d="M22 7V12H20V7H22M20 16H22V14H20V16M18 8V18C18 19.11 17.11 20 16 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H14L18 8M16 8.83L13.17 6H4V18H16V8.83M12 7H5V10H12V7M9.75 12.25C8.5 12.25 7.5 13.26 7.5 14.5S8.5 16.76 9.75 16.76 12 15.75 12 14.5 11 12.25 9.75 12.25Z" />

        </Icon>
      );
    };
    ContentSaveAlertOutlineIcon.displayName = 'ContentSaveAlertOutlineIcon';
      