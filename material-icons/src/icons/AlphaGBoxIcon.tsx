import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaGBoxIcon: FC<IconInterface> = function AlphaGBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaGBoxIcon ${className}`;
      return (
        <Icon alt="AlphaGBox" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V11H13V15H11V9H15V7H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaGBoxIcon.displayName = 'AlphaGBoxIcon';
      