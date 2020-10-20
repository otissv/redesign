import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BlockHelperIcon: FC<IconInterface> = function BlockHelperIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BlockHelperIcon ${className}`;
      return (
        <Icon alt="BlockHelper" className={classNames} {...propsRest}>
          <path d="M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z" />

        </Icon>
      );
    };
    BlockHelperIcon.displayName = 'BlockHelperIcon';
      