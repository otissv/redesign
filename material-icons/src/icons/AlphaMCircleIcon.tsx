import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaMCircleIcon: FC<IconInterface> = function AlphaMCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaMCircleIcon ${className}`;
      return (
        <Icon alt="AlphaMCircle" className={classNames} {...propsRest}>
          <path d="M9,7A2,2 0 0,0 7,9V17H9V9H11V16H13V9H15V17H17V9A2,2 0 0,0 15,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaMCircleIcon.displayName = 'AlphaMCircleIcon';
      