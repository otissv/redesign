import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RepeatOnceIcon: FC<IconInterface> = function RepeatOnceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RepeatOnceIcon ${className}`;
      return (
        <Icon alt="RepeatOnce" className={classNames} {...propsRest}>
          <path d="M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z" />

        </Icon>
      );
    };
    RepeatOnceIcon.displayName = 'RepeatOnceIcon';
      