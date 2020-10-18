import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FullscreenIcon: FC<IconInterface> = function FullscreenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FullscreenIcon ${className}`;
      return (
        <Icon alt="Fullscreen" className={classNames} {...propsRest}>
          <path d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />

        </Icon>
      );
    };
    FullscreenIcon.displayName = 'FullscreenIcon';
      