import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PineTreeIcon: FC<IconInterface> = function PineTreeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PineTreeIcon ${className}`;
      return (
        <Icon alt="PineTree" className={classNames} {...propsRest}>
          <path d="M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z" />

        </Icon>
      );
    };
    PineTreeIcon.displayName = 'PineTreeIcon';
      