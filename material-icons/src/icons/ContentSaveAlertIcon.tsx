import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ContentSaveAlertIcon: FC<IconInterface> = function ContentSaveAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContentSaveAlertIcon ${className}`;
      return (
        <Icon alt="ContentSaveAlert" className={classNames} {...propsRest}>
          <path d="M22 12H20V7H22M22 14H20V16H22M14 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H16A2 2 0 0 0 18 18V8M4 6H12V9H4M10 18A2.5 2.5 0 1 1 12.5 15.5A2.5 2.5 0 0 1 10 18Z" />

        </Icon>
      );
    };
    ContentSaveAlertIcon.displayName = 'ContentSaveAlertIcon';
      