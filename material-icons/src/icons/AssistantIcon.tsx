import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AssistantIcon: FC<IconInterface> = function AssistantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AssistantIcon ${className}`;
      return (
        <Icon alt="Assistant" className={classNames} {...propsRest}>
          <path d="M19,2H5A2,2 0 0,0 3,4V18A2,2 0 0,0 5,20H9L12,23L15,20H19A2,2 0 0,0 21,18V4A2,2 0 0,0 19,2M13.88,12.88L12,17L10.12,12.88L6,11L10.12,9.12L12,5L13.88,9.12L18,11" />

        </Icon>
      );
    };
    AssistantIcon.displayName = 'AssistantIcon';
      