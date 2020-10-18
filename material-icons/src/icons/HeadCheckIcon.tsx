import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HeadCheckIcon: FC<IconInterface> = function HeadCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HeadCheckIcon ${className}`;
      return (
        <Icon alt="HeadCheck" className={classNames} {...propsRest}>
          <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M12.47 13L9 9.5L10.4 8.09L12.47 10.17L16.6 6L18 7.41L12.47 13Z" />

        </Icon>
      );
    };
    HeadCheckIcon.displayName = 'HeadCheckIcon';
      