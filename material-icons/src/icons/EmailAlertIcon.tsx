import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const EmailAlertIcon: FC<IconInterface> = function EmailAlertIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailAlertIcon ${className}`;
      return (
        <Icon alt="EmailAlert" className={classNames} {...propsRest}>
          <path d="M16,9V7L10,11L4,7V9L10,13L16,9M16,5A2,2 0 0,1 18,7V16A2,2 0 0,1 16,18H4C2.89,18 2,17.1 2,16V7A2,2 0 0,1 4,5H16M20,12V7H22V12H20M20,16V14H22V16H20Z" />

        </Icon>
      );
    };
    EmailAlertIcon.displayName = 'EmailAlertIcon';
      