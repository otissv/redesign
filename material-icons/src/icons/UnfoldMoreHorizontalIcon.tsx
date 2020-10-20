import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UnfoldMoreHorizontalIcon: FC<IconInterface> = function UnfoldMoreHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UnfoldMoreHorizontalIcon ${className}`;
      return (
        <Icon alt="UnfoldMoreHorizontal" className={classNames} {...propsRest}>
          <path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />

        </Icon>
      );
    };
    UnfoldMoreHorizontalIcon.displayName = 'UnfoldMoreHorizontalIcon';
      