import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaJIcon: FC<IconInterface> = function AlphaJIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaJIcon ${className}`;
      return (
        <Icon alt="AlphaJ" className={classNames} {...propsRest}>
          <path d="M13,7V15H11V14H9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13Z" />

        </Icon>
      );
    };
    AlphaJIcon.displayName = 'AlphaJIcon';
      