import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SetMergeIcon: FC<IconInterface> = function SetMergeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SetMergeIcon ${className}`;
      return (
        <Icon alt="SetMerge" className={classNames} {...propsRest}>
          <path d="M2 7V9H7V7H2M12 9V11H9V13H12V15L15 12L12 9M17 9V15H22V9H17M2 11V13H7V11H2M2 15V17H7V15H2Z" />

        </Icon>
      );
    };
    SetMergeIcon.displayName = 'SetMergeIcon';
      