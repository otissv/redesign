import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaUBoxIcon: FC<IconInterface> = function AlphaUBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaUBoxIcon ${className}`;
      return (
        <Icon alt="AlphaUBox" className={classNames} {...propsRest}>
          <path d="M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaUBoxIcon.displayName = 'AlphaUBoxIcon';
      