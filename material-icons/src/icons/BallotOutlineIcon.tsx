import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BallotOutlineIcon: FC<IconInterface> = function BallotOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BallotOutlineIcon ${className}`;
      return (
        <Icon alt="BallotOutline" className={classNames} {...propsRest}>
          <path d="M13,7.5H18V9.5H13V7.5M13,14.5H18V16.5H13V14.5M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19M11,6V11H6V6H11M10,10V7H7V10H10M11,13V18H6V13H11M10,17V14H7V17H10Z" />

        </Icon>
      );
    };
    BallotOutlineIcon.displayName = 'BallotOutlineIcon';
      