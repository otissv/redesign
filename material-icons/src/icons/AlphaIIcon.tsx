import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaIIcon: FC<IconInterface> = function AlphaIIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaIIcon ${className}`;
      return (
        <Icon alt="AlphaI" className={classNames} {...propsRest}>
          <path d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14Z" />

        </Icon>
      );
    };
    AlphaIIcon.displayName = 'AlphaIIcon';
      