import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VideoPlusIcon: FC<IconInterface> = function VideoPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VideoPlusIcon ${className}`;
      return (
        <Icon alt="VideoPlus" className={classNames} {...propsRest}>
          <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z" />

        </Icon>
      );
    };
    VideoPlusIcon.displayName = 'VideoPlusIcon';
      