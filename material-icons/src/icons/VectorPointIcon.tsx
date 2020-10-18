import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VectorPointIcon: FC<IconInterface> = function VectorPointIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VectorPointIcon ${className}`;
      return (
        <Icon alt="VectorPoint" className={classNames} {...propsRest}>
          <path d="M12,20L7,22L12,11L17,22L12,20M8,2H16V5H22V7H16V10H8V7H2V5H8V2M10,4V8H14V4H10Z" />

        </Icon>
      );
    };
    VectorPointIcon.displayName = 'VectorPointIcon';
      