import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlayProtectedContentIcon: FC<IconInterface> = function PlayProtectedContentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlayProtectedContentIcon ${className}`;
      return (
        <Icon alt="PlayProtectedContent" className={classNames} {...propsRest}>
          <path d="M2,5V18H11V16H4V7H17V11H19V5H2M9,9V14L12.5,11.5L9,9M21.04,11.67L16.09,16.62L13.96,14.5L12.55,15.91L16.09,19.45L22.45,13.09L21.04,11.67Z" />

        </Icon>
      );
    };
    PlayProtectedContentIcon.displayName = 'PlayProtectedContentIcon';
      