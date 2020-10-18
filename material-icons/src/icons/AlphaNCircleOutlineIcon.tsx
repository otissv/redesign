import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaNCircleOutlineIcon: FC<IconInterface> = function AlphaNCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaNCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaNCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L13,12V7H15V17H13L11,12V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaNCircleOutlineIcon.displayName = 'AlphaNCircleOutlineIcon';
      