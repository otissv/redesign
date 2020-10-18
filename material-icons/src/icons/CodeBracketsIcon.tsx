import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CodeBracketsIcon: FC<IconInterface> = function CodeBracketsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CodeBracketsIcon ${className}`;
      return (
        <Icon alt="CodeBrackets" className={classNames} {...propsRest}>
          <path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z" />

        </Icon>
      );
    };
    CodeBracketsIcon.displayName = 'CodeBracketsIcon';
      