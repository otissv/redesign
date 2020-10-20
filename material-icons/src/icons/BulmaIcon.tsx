import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BulmaIcon: FC<IconInterface> = function BulmaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BulmaIcon ${className}`;
      return (
        <Icon alt="Bulma" className={classNames} {...propsRest}>
          <path d="M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z" />

        </Icon>
      );
    };
    BulmaIcon.displayName = 'BulmaIcon';
      