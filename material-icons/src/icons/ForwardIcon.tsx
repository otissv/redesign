import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ForwardIcon: FC<IconInterface> = function ForwardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ForwardIcon ${className}`;
      return (
        <Icon alt="Forward" className={classNames} {...propsRest}>
          <path d="M12,8V4L20,12L12,20V16H4V8H12Z" />

        </Icon>
      );
    };
    ForwardIcon.displayName = 'ForwardIcon';
      