import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NasIcon: FC<IconInterface> = function NasIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NasIcon ${className}`;
      return (
        <Icon alt="Nas" className={classNames} {...propsRest}>
          <path d="M4,5C2.89,5 2,5.89 2,7V17C2,18.11 2.89,19 4,19H20C21.11,19 22,18.11 22,17V7C22,5.89 21.11,5 20,5H4M4.5,7A1,1 0 0,1 5.5,8A1,1 0 0,1 4.5,9A1,1 0 0,1 3.5,8A1,1 0 0,1 4.5,7M7,7H20V17H7V7M8,8V16H11V8H8M12,8V16H15V8H12M16,8V16H19V8H16M9,9H10V10H9V9M13,9H14V10H13V9M17,9H18V10H17V9Z" />

        </Icon>
      );
    };
    NasIcon.displayName = 'NasIcon';
      