import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowExpandIcon: FC<IconInterface> = function ArrowExpandIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowExpandIcon ${className}`;
      return (
        <Icon alt="ArrowExpand" className={classNames} {...propsRest}>
          <path d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" />

        </Icon>
      );
    };
    ArrowExpandIcon.displayName = 'ArrowExpandIcon';
      