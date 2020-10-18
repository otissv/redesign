import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HeadIcon: FC<IconInterface> = function HeadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HeadIcon ${className}`;
      return (
        <Icon alt="Head" className={classNames} {...propsRest}>
          <path d="M13 3C9.2 3 6.2 5.9 6 9.7L4.1 12.2C3.9 12.5 4.1 13 4.5 13H6V16C6 17.1 6.9 18 8 18H9V21H16V16.3C18.4 15.2 20 12.8 20 10C20 6.1 16.9 3 13 3" />

        </Icon>
      );
    };
    HeadIcon.displayName = 'HeadIcon';
      