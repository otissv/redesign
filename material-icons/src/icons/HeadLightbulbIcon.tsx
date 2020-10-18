import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HeadLightbulbIcon: FC<IconInterface> = function HeadLightbulbIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HeadLightbulbIcon ${className}`;
      return (
        <Icon alt="HeadLightbulb" className={classNames} {...propsRest}>
          <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M14 14H12V13H14V14M15.6 9.5C15.34 9.94 14.96 10.32 14.5 10.58V12H11.5V10.58C10.07 9.75 9.57 7.92 10.4 6.5S13.07 4.56 14.5 5.38 16.43 8.05 15.6 9.5Z" />

        </Icon>
      );
    };
    HeadLightbulbIcon.displayName = 'HeadLightbulbIcon';
      