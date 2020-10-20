import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MoveResizeIcon: FC<IconInterface> = function MoveResizeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoveResizeIcon ${className}`;
      return (
        <Icon alt="MoveResize" className={classNames} {...propsRest}>
          <path d="M9,1V2H10V5H9V6H12V5H11V2H12V1M9,7C7.89,7 7,7.89 7,9V21C7,22.11 7.89,23 9,23H21C22.11,23 23,22.11 23,21V9C23,7.89 22.11,7 21,7M1,9V12H2V11H5V12H6V9H5V10H2V9M9,9H21V21H9M14,10V11H15V16H11V15H10V18H11V17H15V19H14V20H17V19H16V17H19V18H20V15H19V16H16V11H17V10" />

        </Icon>
      );
    };
    MoveResizeIcon.displayName = 'MoveResizeIcon';
      