import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaNBoxOutlineIcon: FC<IconInterface> = function AlphaNBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaNBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaNBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L13,12V7H15V17H13L11,12V17H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaNBoxOutlineIcon.displayName = 'AlphaNBoxOutlineIcon';
      