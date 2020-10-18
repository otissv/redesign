import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BaguetteIcon: FC<IconInterface> = function BaguetteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BaguetteIcon ${className}`;
      return (
        <Icon alt="Baguette" className={classNames} {...propsRest}>
          <path d="M5 22C3.68 22 3.15 19.64 3.04 18.7A5.56 5.56 0 0 1 3.36 16A2.5 2.5 0 0 1 5.23 14.38C6.4 14.18 7.23 14.88 8.29 15.12A1.21 1.21 0 0 0 9.85 13.75C9.41 12.03 6.28 12 5 12C5 10.14 7.04 9.9 8.5 10.04A10.8 10.8 0 0 1 11.04 10.6C11.54 10.77 12.12 11.2 12.67 11.16C13.5 11.09 13.67 10.23 13.31 9.6C12.44 8.12 9.97 8 8.5 8C8.5 6 10.23 5.62 11.89 5.92A11.58 11.58 0 0 1 14.38 6.71C14.89 6.93 15.5 7.35 16.06 7.16C17.5 6.72 16 5.18 15.36 4.81A6.6 6.6 0 0 0 13.94 4.23C13.4 4.07 12.74 4.13 13.23 3.5A5.13 5.13 0 0 1 15.96 2.26C17.85 1.82 20.46 1.74 20.92 4.12A5.3 5.3 0 0 1 20.07 7.7A38.96 38.96 0 0 1 13.22 16.33A36.6 36.6 0 0 1 8.62 20.32C7.62 21.04 6.3 22 5 22Z" />

        </Icon>
      );
    };
    BaguetteIcon.displayName = 'BaguetteIcon';
      