import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaABoxIcon: FC<IconInterface> = function AlphaABoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaABoxIcon ${className}`;
      return (
        <Icon alt="AlphaABox" className={classNames} {...propsRest}>
          <path d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z" />

        </Icon>
      );
    };
    AlphaABoxIcon.displayName = 'AlphaABoxIcon';
      