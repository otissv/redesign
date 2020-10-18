import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaECircleIcon: FC<IconInterface> = function AlphaECircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaECircleIcon ${className}`;
      return (
        <Icon alt="AlphaECircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H15V15H11V13H15V11H11V9H15V7H9Z" />

        </Icon>
      );
    };
    AlphaECircleIcon.displayName = 'AlphaECircleIcon';
      