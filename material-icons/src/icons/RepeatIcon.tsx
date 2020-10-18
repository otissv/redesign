import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RepeatIcon: FC<IconInterface> = function RepeatIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RepeatIcon ${className}`;
      return (
        <Icon alt="Repeat" className={classNames} {...propsRest}>
          <path d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z" />

        </Icon>
      );
    };
    RepeatIcon.displayName = 'RepeatIcon';
      