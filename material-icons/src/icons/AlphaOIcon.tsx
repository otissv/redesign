import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaOIcon: FC<IconInterface> = function AlphaOIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaOIcon ${className}`;
      return (
        <Icon alt="AlphaO" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    AlphaOIcon.displayName = 'AlphaOIcon';
      