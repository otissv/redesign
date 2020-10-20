import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CodeTagsIcon: FC<IconInterface> = function CodeTagsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CodeTagsIcon ${className}`;
      return (
        <Icon alt="CodeTags" className={classNames} {...propsRest}>
          <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />

        </Icon>
      );
    };
    CodeTagsIcon.displayName = 'CodeTagsIcon';
      