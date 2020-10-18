import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SegmentIcon: FC<IconInterface> = function SegmentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SegmentIcon ${className}`;
      return (
        <Icon alt="Segment" className={classNames} {...propsRest}>
          <path d="M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9" />

        </Icon>
      );
    };
    SegmentIcon.displayName = 'SegmentIcon';
      