import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaIBoxIcon: FC<IconInterface> = function AlphaIBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaIBoxIcon ${className}`;
      return (
        <Icon alt="AlphaIBox" className={classNames} {...propsRest}>
          <path d="M14,7H10V9H11V15H10V17H14V15H13V9H14V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaIBoxIcon.displayName = 'AlphaIBoxIcon';
      