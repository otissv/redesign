import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AngleRightIcon: FC<IconInterface> = function AngleRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AngleRightIcon ${className}`;
      return (
        <Icon alt="AngleRight" className={classNames} {...propsRest}>
          <path d="M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z" />

        </Icon>
      );
    };
    AngleRightIcon.displayName = 'AngleRightIcon';
      