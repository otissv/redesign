import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaPBoxIcon: FC<IconInterface> = function AlphaPBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaPBoxIcon ${className}`;
      return (
        <Icon alt="AlphaPBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaPBoxIcon.displayName = 'AlphaPBoxIcon';
      