import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SourceCommitEndIcon: FC<IconInterface> = function SourceCommitEndIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SourceCommitEndIcon ${className}`;
      return (
        <Icon alt="SourceCommitEnd" className={classNames} {...propsRest}>
          <path d="M17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12C7,9.58 8.72,7.56 11,7.1V3H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />

        </Icon>
      );
    };
    SourceCommitEndIcon.displayName = 'SourceCommitEndIcon';
      