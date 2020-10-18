import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TriangleOutlineIcon: FC<IconInterface> = function TriangleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TriangleOutlineIcon ${className}`;
      return (
        <Icon alt="TriangleOutline" className={classNames} {...propsRest}>
          <path d="M12,2L1,21H23M12,6L19.53,19H4.47" />

        </Icon>
      );
    };
    TriangleOutlineIcon.displayName = 'TriangleOutlineIcon';
      