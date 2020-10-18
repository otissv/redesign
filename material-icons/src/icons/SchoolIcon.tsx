import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SchoolIcon: FC<IconInterface> = function SchoolIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SchoolIcon ${className}`;
      return (
        <Icon alt="School" className={classNames} {...propsRest}>
          <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />

        </Icon>
      );
    };
    SchoolIcon.displayName = 'SchoolIcon';
      