import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaZBoxIcon: FC<IconInterface> = function AlphaZBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaZBoxIcon ${className}`;
      return (
        <Icon alt="AlphaZBox" className={classNames} {...propsRest}>
          <path d="M9,7V9H13L9,15V17H15V15H11L15,9V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaZBoxIcon.displayName = 'AlphaZBoxIcon';
      