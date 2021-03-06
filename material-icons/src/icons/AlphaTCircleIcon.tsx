import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaTCircleIcon: FC<IconInterface> = function AlphaTCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaTCircleIcon ${className}`;
      return (
        <Icon alt="AlphaTCircle" className={classNames} {...propsRest}>
          <path d="M9,7V9H11V17H13V9H15V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaTCircleIcon.displayName = 'AlphaTCircleIcon';
      