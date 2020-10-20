import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WallSconceIcon: FC<IconInterface> = function WallSconceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WallSconceIcon ${className}`;
      return (
        <Icon alt="WallSconce" className={classNames} {...propsRest}>
          <path d="M11,4L7,13H19L15,4H11M4,14V22H6V19H14V14H12V17H6V14H4Z" />

        </Icon>
      );
    };
    WallSconceIcon.displayName = 'WallSconceIcon';
      