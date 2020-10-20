import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MagnifyRemoveOutlineIcon: FC<IconInterface> = function MagnifyRemoveOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MagnifyRemoveOutlineIcon ${className}`;
      return (
        <Icon alt="MagnifyRemoveOutline" className={classNames} {...propsRest}>
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.5L20.5 19L15.5 14M9.5 14C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14M10.91 11.62L9.5 10.21L8.09 11.62L7.38 10.91L8.79 9.5L7.38 8.09L8.09 7.38L9.5 8.79L10.91 7.38L11.62 8.09L10.21 9.5L11.62 10.91L10.91 11.62Z" />

        </Icon>
      );
    };
    MagnifyRemoveOutlineIcon.displayName = 'MagnifyRemoveOutlineIcon';
      