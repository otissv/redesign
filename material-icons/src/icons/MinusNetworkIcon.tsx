import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MinusNetworkIcon: FC<IconInterface> = function MinusNetworkIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinusNetworkIcon ${className}`;
      return (
        <Icon alt="MinusNetwork" className={classNames} {...propsRest}>
          <path d="M16,11V9H8V11H16M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z" />

        </Icon>
      );
    };
    MinusNetworkIcon.displayName = 'MinusNetworkIcon';
      