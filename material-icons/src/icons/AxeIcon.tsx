import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AxeIcon: FC<IconInterface> = function AxeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AxeIcon ${className}`;
      return (
        <Icon alt="Axe" className={classNames} {...propsRest}>
          <path d="M12,2L22,8C22,12 20,14 16,15L13,10L9,6L12,2M4.11,19.84L2.12,18.33L9.19,9L11,10.81L4.11,19.84Z" />

        </Icon>
      );
    };
    AxeIcon.displayName = 'AxeIcon';
      