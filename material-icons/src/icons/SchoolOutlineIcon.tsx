import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SchoolOutlineIcon: FC<IconInterface> = function SchoolOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SchoolOutlineIcon ${className}`;
      return (
        <Icon alt="SchoolOutline" className={classNames} {...propsRest}>
          <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />

        </Icon>
      );
    };
    SchoolOutlineIcon.displayName = 'SchoolOutlineIcon';
      