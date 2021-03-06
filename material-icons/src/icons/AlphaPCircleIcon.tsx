import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaPCircleIcon: FC<IconInterface> = function AlphaPCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaPCircleIcon ${className}`;
      return (
        <Icon alt="AlphaPCircle" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaPCircleIcon.displayName = 'AlphaPCircleIcon';
      