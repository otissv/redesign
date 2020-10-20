import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CryengineIcon: FC<IconInterface> = function CryengineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CryengineIcon ${className}`;
      return (
        <Icon alt="Cryengine" className={classNames} {...propsRest}>
          <path d="M23.03,12.4M23.03,12.5V12.5C23,13 20.91,15.23 17.82,16.24C14.05,17.5 7.97,17.03 7.97,12.3C7.97,10.08 9.78,8.27 12,8.27C14.25,8.27 16.05,10.09 16.05,12.31C16.05,13.39 15.58,14.44 14.87,15.18C15.54,15.17 17.94,15 20.21,13.12C20.46,12.88 20.62,12.68 20.69,12.55C20.71,12.5 20.74,12.46 20.73,12.4C20.73,11.92 18.12,8.19 12.72,7.12C19.22,7.46 23,11.32 23.03,12.4V12.5H23.03M12,10C10.74,10 9.71,11.04 9.71,12.3C9.71,13.57 10.74,14.59 12,14.59C13.27,14.59 14.29,13.57 14.29,12.3C14.29,11.04 13.27,10 12,10M3.31,12.34C3.31,12.34 3.31,12.31 3.31,12.42V12.42C3.41,12.94 4.82,15.41 10.28,16.88C3.96,16.37 1.12,13.28 1.04,12.42H1.03C1.03,12.31 1.03,12.36 1.03,12.35C1.03,11.5 4.96,7.58 10.92,7.15C6.14,8.26 3.31,11.87 3.31,12.34V12.34Z" />

        </Icon>
      );
    };
    CryengineIcon.displayName = 'CryengineIcon';
      