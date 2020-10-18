import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CancelIcon: FC<IconInterface> = function CancelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CancelIcon ${className}`;
      return (
        <Icon alt="Cancel" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z" />

        </Icon>
      );
    };
    CancelIcon.displayName = 'CancelIcon';
      