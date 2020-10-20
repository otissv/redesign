import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaEBoxIcon: FC<IconInterface> = function AlphaEBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaEBoxIcon ${className}`;
      return (
        <Icon alt="AlphaEBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H15V15H11V13H15V11H11V9H15V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaEBoxIcon.displayName = 'AlphaEBoxIcon';
      