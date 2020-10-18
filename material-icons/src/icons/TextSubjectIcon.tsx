import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TextSubjectIcon: FC<IconInterface> = function TextSubjectIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TextSubjectIcon ${className}`;
      return (
        <Icon alt="TextSubject" className={classNames} {...propsRest}>
          <path d="M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z" />

        </Icon>
      );
    };
    TextSubjectIcon.displayName = 'TextSubjectIcon';
      