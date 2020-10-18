import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PollIcon: FC<IconInterface> = function PollIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PollIcon ${className}`;
      return (
        <Icon alt="Poll" className={classNames} {...propsRest}>
          <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z" />

        </Icon>
      );
    };
    PollIcon.displayName = 'PollIcon';
      