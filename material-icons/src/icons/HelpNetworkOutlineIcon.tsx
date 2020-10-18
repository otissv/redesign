import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HelpNetworkOutlineIcon: FC<IconInterface> = function HelpNetworkOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HelpNetworkOutlineIcon ${className}`;
      return (
        <Icon alt="HelpNetworkOutline" className={classNames} {...propsRest}>
          <path d="M15,20A1,1 0 0,0 14,19H13V17H17A2,2 0 0,0 19,15V5A2,2 0 0,0 17,3H7A2,2 0 0,0 5,5V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15M7,15V5H17V15H7M11.95,6C11.17,6 10.55,6.18 10.07,6.5C9.61,6.89 9.38,7.4 9.39,8.1L9.4,8.13H11.11C11.12,7.86 11.2,7.65 11.36,7.5C11.5,7.38 11.72,7.31 11.95,7.31C12.22,7.31 12.45,7.4 12.61,7.56C12.77,7.73 12.85,7.96 12.85,8.22C12.85,8.5 12.78,8.75 12.64,8.95C12.5,9.16 12.33,9.33 12.1,9.5C11.65,9.78 11.34,10.05 11.17,10.29C11,10.5 10.89,10.89 10.89,11.33H12.67C12.67,11.06 12.7,10.84 12.78,10.68C12.86,10.5 13,10.36 13.24,10.21C13.64,10 13.97,9.74 14.22,9.39C14.5,9.03 14.62,8.67 14.62,8.22C14.62,7.55 14.38,7 13.9,6.61C13.42,6.2 12.77,6 11.95,6M10.89,12.22V14H12.67V12.22H10.89Z" />

        </Icon>
      );
    };
    HelpNetworkOutlineIcon.displayName = 'HelpNetworkOutlineIcon';
      