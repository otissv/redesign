import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaXIcon: FC<IconInterface> = function AlphaXIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaXIcon ${className}`;
      return (
        <Icon alt="AlphaX" className={classNames} {...propsRest}>
          <path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" />

        </Icon>
      );
    };
    AlphaXIcon.displayName = 'AlphaXIcon';
      