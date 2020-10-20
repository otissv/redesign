import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MinusNetworkOutlineIcon: FC<IconInterface> = function MinusNetworkOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MinusNetworkOutlineIcon ${className}`;
      return (
        <Icon alt="MinusNetworkOutline" className={classNames} {...propsRest}>
          <path d="M15,20A1,1 0 0,0 14,19H13V17H17A2,2 0 0,0 19,15V5A2,2 0 0,0 17,3H7A2,2 0 0,0 5,5V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15M7,15V5H17V15H7M15,11V9H9V11H15" />

        </Icon>
      );
    };
    MinusNetworkOutlineIcon.displayName = 'MinusNetworkOutlineIcon';
      