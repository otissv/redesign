import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaNCircleIcon: FC<IconInterface> = function AlphaNCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaNCircleIcon ${className}`;
      return (
        <Icon alt="AlphaNCircle" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V12L13,17H15V7H13V12L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaNCircleIcon.displayName = 'AlphaNCircleIcon';
      