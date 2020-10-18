import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaZCircleIcon: FC<IconInterface> = function AlphaZCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaZCircleIcon ${className}`;
      return (
        <Icon alt="AlphaZCircle" className={classNames} {...propsRest}>
          <path d="M9,7V9H13L9,15V17H15V15H11L15,9V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaZCircleIcon.displayName = 'AlphaZCircleIcon';
      