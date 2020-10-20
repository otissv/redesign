import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SummitIcon: FC<IconInterface> = function SummitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SummitIcon ${className}`;
      return (
        <Icon alt="Summit" className={classNames} {...propsRest}>
          <path d="M15,3H17L22,5L17,7V10.17L22,21H2L8,13L11.5,17.7L15,10.17V3Z" />

        </Icon>
      );
    };
    SummitIcon.displayName = 'SummitIcon';
      