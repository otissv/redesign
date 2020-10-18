import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PentagonOutlineIcon: FC<IconInterface> = function PentagonOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PentagonOutlineIcon ${className}`;
      return (
        <Icon alt="PentagonOutline" className={classNames} {...propsRest}>
          <path d="M12,5L19.6,10.5L16.7,19.4H7.3L4.4,10.5L12,5M12,2.5L2,9.8L5.8,21.5H18.1L22,9.8L12,2.5Z" />

        </Icon>
      );
    };
    PentagonOutlineIcon.displayName = 'PentagonOutlineIcon';
      