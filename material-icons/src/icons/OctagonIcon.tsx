import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const OctagonIcon: FC<IconInterface> = function OctagonIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OctagonIcon ${className}`;
      return (
        <Icon alt="Octagon" className={classNames} {...propsRest}>
          <path d="M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27" />

        </Icon>
      );
    };
    OctagonIcon.displayName = 'OctagonIcon';
      