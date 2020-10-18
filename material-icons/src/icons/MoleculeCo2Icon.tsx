import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MoleculeCo2Icon: FC<IconInterface> = function MoleculeCo2Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `MoleculeCo2Icon ${className}`;
      return (
        <Icon alt="MoleculeCo2" className={classNames} {...propsRest}>
          <path d="M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H8V15H5V9H8V7H5M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M16,10.5V12H19V13.5H17.5A1.5,1.5 0 0,0 16,15V18H20.5V16.5H17.5V15H19A1.5,1.5 0 0,0 20.5,13.5V12A1.5,1.5 0 0,0 19,10.5H16Z" />

        </Icon>
      );
    };
    MoleculeCo2Icon.displayName = 'MoleculeCo2Icon';
      