import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TieIcon: FC<IconInterface> = function TieIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TieIcon ${className}`;
      return (
        <Icon alt="Tie" className={classNames} {...propsRest}>
          <path d="M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z" />

        </Icon>
      );
    };
    TieIcon.displayName = 'TieIcon';
      