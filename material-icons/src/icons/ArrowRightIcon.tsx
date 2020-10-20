import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowRightIcon: FC<IconInterface> = function ArrowRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightIcon ${className}`;
      return (
        <Icon alt="ArrowRight" className={classNames} {...propsRest}>
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />

        </Icon>
      );
    };
    ArrowRightIcon.displayName = 'ArrowRightIcon';
      