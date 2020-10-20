import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaWIcon: FC<IconInterface> = function AlphaWIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaWIcon ${className}`;
      return (
        <Icon alt="AlphaW" className={classNames} {...propsRest}>
          <path d="M9,17A2,2 0 0,1 7,15V7H9V15H11V8H13V15H15V7H17V15A2,2 0 0,1 15,17H9Z" />

        </Icon>
      );
    };
    AlphaWIcon.displayName = 'AlphaWIcon';
      