import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WebpackIcon: FC<IconInterface> = function WebpackIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WebpackIcon ${className}`;
      return (
        <Icon alt="Webpack" className={classNames} {...propsRest}>
          <path d="M20.45 17.39L12.36 21.97V18.4L17.4 15.63L20.45 17.39M21 16.89V7.31L18.04 9V15.18L21 16.89M3.55 17.39L11.64 21.96V18.4L6.6 15.63L3.55 17.39M3 16.89V7.31L5.96 9V15.18L3 16.89M3.35 6.69L11.64 2V5.45L6.33 8.37L6.28 8.39L3.35 6.69M20.65 6.69L12.36 2V5.45L17.67 8.38L17.71 8.4L20.65 6.69M11.64 17.59L6.67 14.85V9.44L11.64 12.31V17.59M12.36 17.59L17.33 14.86V9.44L12.36 12.31V17.59M7 8.81L12 6.06L17 8.81L12 11.69L7 8.81Z" />

        </Icon>
      );
    };
    WebpackIcon.displayName = 'WebpackIcon';
      