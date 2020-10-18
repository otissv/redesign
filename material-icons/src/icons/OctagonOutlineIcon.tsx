import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const OctagonOutlineIcon: FC<IconInterface> = function OctagonOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OctagonOutlineIcon ${className}`;
      return (
        <Icon alt="OctagonOutline" className={classNames} {...propsRest}>
          <path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1" />

        </Icon>
      );
    };
    OctagonOutlineIcon.displayName = 'OctagonOutlineIcon';
      