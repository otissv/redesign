import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const VectorLineIcon: FC<IconInterface> = function VectorLineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VectorLineIcon ${className}`;
      return (
        <Icon alt="VectorLine" className={classNames} {...propsRest}>
          <path d="M15,3V7.59L7.59,15H3V21H9V16.42L16.42,9H21V3M17,5H19V7H17M5,17H7V19H5" />

        </Icon>
      );
    };
    VectorLineIcon.displayName = 'VectorLineIcon';
      