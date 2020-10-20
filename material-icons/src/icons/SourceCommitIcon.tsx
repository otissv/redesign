import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SourceCommitIcon: FC<IconInterface> = function SourceCommitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SourceCommitIcon ${className}`;
      return (
        <Icon alt="SourceCommit" className={classNames} {...propsRest}>
          <path d="M17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12C7,9.58 8.72,7.56 11,7.1V3H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />

        </Icon>
      );
    };
    SourceCommitIcon.displayName = 'SourceCommitIcon';
      