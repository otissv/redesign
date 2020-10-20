import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaLCircleIcon: FC<IconInterface> = function AlphaLCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaLCircleIcon ${className}`;
      return (
        <Icon alt="AlphaLCircle" className={classNames} {...propsRest}>
          <path d="M9,7V17H15V15H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaLCircleIcon.displayName = 'AlphaLCircleIcon';
      