import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatParagraphIcon: FC<IconInterface> = function FormatParagraphIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatParagraphIcon ${className}`;
      return (
        <Icon alt="FormatParagraph" className={classNames} {...propsRest}>
          <path d="M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z" />

        </Icon>
      );
    };
    FormatParagraphIcon.displayName = 'FormatParagraphIcon';
      