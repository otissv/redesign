import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CircleSlice5Icon: FC<IconInterface> = function CircleSlice5Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `CircleSlice5Icon ${className}`;
      return (
        <Icon alt="CircleSlice5" className={classNames} {...propsRest}>
          <path d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C10.07 19 8.32 18.22 7.05 16.95L12 12V5Z" />

        </Icon>
      );
    };
    CircleSlice5Icon.displayName = 'CircleSlice5Icon';
      