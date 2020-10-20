import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaJBoxIcon: FC<IconInterface> = function AlphaJBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaJBoxIcon ${className}`;
      return (
        <Icon alt="AlphaJBox" className={classNames} {...propsRest}>
          <path d="M13,7V15H11V14H9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaJBoxIcon.displayName = 'AlphaJBoxIcon';
      