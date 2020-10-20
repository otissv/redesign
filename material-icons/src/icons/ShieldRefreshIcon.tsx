import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShieldRefreshIcon: FC<IconInterface> = function ShieldRefreshIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldRefreshIcon ${className}`;
      return (
        <Icon alt="ShieldRefresh" className={classNames} {...propsRest}>
          <path d="M18 12C19 12 20 12.2 20.9 12.7C21 12.1 21 11.6 21 11V5L12 1L3 5V11C3 16.5 6.8 21.7 12 23C12.4 22.9 12.7 22.8 13 22.7C12 21.5 11.5 20 11.5 18.5C11.5 14.9 14.4 12 18 12M18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5S16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5S15.8 14.5 18 14.5Z" />

        </Icon>
      );
    };
    ShieldRefreshIcon.displayName = 'ShieldRefreshIcon';
      