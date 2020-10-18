import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ForumOutlineIcon: FC<IconInterface> = function ForumOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ForumOutlineIcon ${className}`;
      return (
        <Icon alt="ForumOutline" className={classNames} {...propsRest}>
          <path d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />

        </Icon>
      );
    };
    ForumOutlineIcon.displayName = 'ForumOutlineIcon';
      