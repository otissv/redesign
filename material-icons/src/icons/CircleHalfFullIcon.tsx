import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CircleHalfFullIcon: FC<IconInterface> = function CircleHalfFullIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CircleHalfFullIcon ${className}`;
      return (
        <Icon alt="CircleHalfFull" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z" />

        </Icon>
      );
    };
    CircleHalfFullIcon.displayName = 'CircleHalfFullIcon';
      