import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaNBoxIcon: FC<IconInterface> = function AlphaNBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaNBoxIcon ${className}`;
      return (
        <Icon alt="AlphaNBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V12L13,17H15V7H13V12L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaNBoxIcon.displayName = 'AlphaNBoxIcon';
      