import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HelpNetworkIcon: FC<IconInterface> = function HelpNetworkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HelpNetworkIcon ${className}`;
      return (
        <Icon alt="HelpNetwork" className={classNames} {...propsRest}>
          <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17M12.19,5C11.32,5 10.62,5.2 10.08,5.59C9.56,6 9.3,6.57 9.31,7.36L9.32,7.39H11.25C11.26,7.09 11.35,6.86 11.53,6.7C11.71,6.55 11.93,6.47 12.19,6.47C12.5,6.47 12.76,6.57 12.94,6.75C13.12,6.94 13.2,7.2 13.2,7.5C13.2,7.82 13.13,8.09 12.97,8.32C12.83,8.55 12.62,8.75 12.36,8.91C11.85,9.25 11.5,9.55 11.31,9.82C11.11,10.08 11,10.5 11,11H13C13,10.69 13.04,10.44 13.13,10.26C13.22,10.07 13.39,9.9 13.64,9.74C14.09,9.5 14.46,9.21 14.75,8.81C15.04,8.41 15.19,8 15.19,7.5C15.19,6.74 14.92,6.13 14.38,5.68C13.85,5.23 13.12,5 12.19,5M11,12V14H13V12H11Z" />

        </Icon>
      );
    };
    HelpNetworkIcon.displayName = 'HelpNetworkIcon';
      