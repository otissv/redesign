import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DiameterIcon: FC<IconInterface> = function DiameterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DiameterIcon ${className}`;
      return (
        <Icon alt="Diameter" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,15V13H7V15L4,12L7,9V11H17V9L20,12L17,15Z" />

        </Icon>
      );
    };
    DiameterIcon.displayName = 'DiameterIcon';
      