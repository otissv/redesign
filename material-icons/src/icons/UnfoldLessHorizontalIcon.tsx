import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const UnfoldLessHorizontalIcon: FC<IconInterface> = function UnfoldLessHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `UnfoldLessHorizontalIcon ${className}`;
      return (
        <Icon alt="UnfoldLessHorizontal" className={classNames} {...propsRest}>
          <path d="M16.59,5.41L15.17,4L12,7.17L8.83,4L7.41,5.41L12,10M7.41,18.59L8.83,20L12,16.83L15.17,20L16.58,18.59L12,14L7.41,18.59Z" />

        </Icon>
      );
    };
    UnfoldLessHorizontalIcon.displayName = 'UnfoldLessHorizontalIcon';
      