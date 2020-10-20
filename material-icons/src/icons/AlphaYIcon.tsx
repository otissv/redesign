import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaYIcon: FC<IconInterface> = function AlphaYIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaYIcon ${className}`;
      return (
        <Icon alt="AlphaY" className={classNames} {...propsRest}>
          <path d="M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9Z" />

        </Icon>
      );
    };
    AlphaYIcon.displayName = 'AlphaYIcon';
      