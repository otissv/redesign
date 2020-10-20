import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PentagonIcon: FC<IconInterface> = function PentagonIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PentagonIcon ${className}`;
      return (
        <Icon alt="Pentagon" className={classNames} {...propsRest}>
          <path d="M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z" />

        </Icon>
      );
    };
    PentagonIcon.displayName = 'PentagonIcon';
      