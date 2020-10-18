import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowCollapseUpIcon: FC<IconInterface> = function ArrowCollapseUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowCollapseUpIcon ${className}`;
      return (
        <Icon alt="ArrowCollapseUp" className={classNames} {...propsRest}>
          <path d="M4.08,11.92L12,4L19.92,11.92L18.5,13.33L13,7.83V22H11V7.83L5.5,13.33L4.08,11.92M12,4H22V2H2V4H12Z" />

        </Icon>
      );
    };
    ArrowCollapseUpIcon.displayName = 'ArrowCollapseUpIcon';
      