import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CreditCardSettingsIcon: FC<IconInterface> = function CreditCardSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardSettingsIcon ${className}`;
      return (
        <Icon alt="CreditCardSettings" className={classNames} {...propsRest}>
          <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15Z" />

        </Icon>
      );
    };
    CreditCardSettingsIcon.displayName = 'CreditCardSettingsIcon';
      