import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SkewMoreIcon: FC<IconInterface> = function SkewMoreIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkewMoreIcon ${className}`;
      return (
        <Icon alt="SkewMore" className={classNames} {...propsRest}>
          <path d="M12.5,11L10.41,20H5.5L7.59,11H12.5M15,9H6L3,22H12L15,9M21,6L17,2V5H9V7H17V10L21,6Z" />

        </Icon>
      );
    };
    SkewMoreIcon.displayName = 'SkewMoreIcon';
      