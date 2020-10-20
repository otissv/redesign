import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaFCircleIcon: FC<IconInterface> = function AlphaFCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaFCircleIcon ${className}`;
      return (
        <Icon alt="AlphaFCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H11V13H14V11H11V9H15V7H9Z" />

        </Icon>
      );
    };
    AlphaFCircleIcon.displayName = 'AlphaFCircleIcon';
      