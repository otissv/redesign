import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MoveResizeVariantIcon: FC<IconInterface> = function MoveResizeVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoveResizeVariantIcon ${className}`;
      return (
        <Icon alt="MoveResizeVariant" className={classNames} {...propsRest}>
          <path d="M1.88,0.46L0.46,1.88L5.59,7H2V9H9V2H7V5.59M11,7V9H21V15H23V9A2,2 0 0,0 21,7M7,11V21A2,2 0 0,0 9,23H15V21H9V11M15.88,14.46L14.46,15.88L19.6,21H17V23H23V17H21V19.59" />

        </Icon>
      );
    };
    MoveResizeVariantIcon.displayName = 'MoveResizeVariantIcon';
      