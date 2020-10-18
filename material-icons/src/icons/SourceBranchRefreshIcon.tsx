import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SourceBranchRefreshIcon: FC<IconInterface> = function SourceBranchRefreshIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SourceBranchRefreshIcon ${className}`;
      return (
        <Icon alt="SourceBranchRefresh" className={classNames} {...propsRest}>
          <path d="M13 14C9.64 14 8.54 15.35 8.18 16.24C9.25 16.7 10 17.76 10 19C10 20.66 8.66 22 7 22S4 20.66 4 19C4 17.69 4.83 16.58 6 16.17V7.83C4.83 7.42 4 6.31 4 5C4 3.34 5.34 2 7 2S10 3.34 10 5C10 6.31 9.17 7.42 8 7.83V13.12C8.88 12.47 10.16 12 12 12C14.67 12 15.56 10.66 15.85 9.77C14.77 9.32 14 8.25 14 7C14 5.34 15.34 4 17 4S20 5.34 20 7C20 8.34 19.12 9.5 17.91 9.86C17.65 11.29 16.68 14 13 14M7 18C6.45 18 6 18.45 6 19S6.45 20 7 20 8 19.55 8 19 7.55 18 7 18M7 4C6.45 4 6 4.45 6 5S6.45 6 7 6 8 5.55 8 5 7.55 4 7 4M17 6C16.45 6 16 6.45 16 7S16.45 8 17 8 18 7.55 18 7 17.55 6 17 6M18 14C19.1 14 20.1 14.4 20.8 15.2L22 14V18H18L19.8 16.2C19.3 15.8 18.7 15.5 18 15.5C16.6 15.5 15.5 16.6 15.5 18S16.6 20.5 18 20.5C18.8 20.5 19.5 20.1 20 19.5H21.7C21.1 21 19.7 22 18 22C15.8 22 14 20.2 14 18S15.8 14 18 14Z" />

        </Icon>
      );
    };
    SourceBranchRefreshIcon.displayName = 'SourceBranchRefreshIcon';
      