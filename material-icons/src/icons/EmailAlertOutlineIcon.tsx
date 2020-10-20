import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmailAlertOutlineIcon: FC<IconInterface> = function EmailAlertOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailAlertOutlineIcon ${className}`;
      return (
        <Icon alt="EmailAlertOutline" className={classNames} {...propsRest}>
          <path d="M20 12V7H22V12H20M20 16V14H22V16H20M18 7C18 5.9 17.1 5 16 5H4C2.9 5 2 5.9 2 7V16C2 17.1 2.9 18 4 18H16C17.1 18 18 17.1 18 16V7M16 7L10 11L4 7H16M16 16H4V9L10 13L16 9V16Z" />

        </Icon>
      );
    };
    EmailAlertOutlineIcon.displayName = 'EmailAlertOutlineIcon';
      