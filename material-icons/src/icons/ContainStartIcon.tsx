import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ContainStartIcon: FC<IconInterface> = function ContainStartIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ContainStartIcon ${className}`;
      return (
        <Icon alt="ContainStart" className={classNames} {...propsRest}>
          <path d="M2,3H8V5H4V19H8V21H2V3M7,17V15H9V17H7M11,17V15H13V17H11M15,17V15H17V17H15Z" />

        </Icon>
      );
    };
    ContainStartIcon.displayName = 'ContainStartIcon';
      