import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SetSplitIcon: FC<IconInterface> = function SetSplitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SetSplitIcon ${className}`;
      return (
        <Icon alt="SetSplit" className={classNames} {...propsRest}>
          <path d="M17 7V9H22V7H17M2 9V15H7V9H2M12 9V11H9V13H12V15L15 12L12 9M17 11V13H22V11H17M17 15V17H22V15H17Z" />

        </Icon>
      );
    };
    SetSplitIcon.displayName = 'SetSplitIcon';
      