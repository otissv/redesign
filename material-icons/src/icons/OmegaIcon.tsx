import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const OmegaIcon: FC<IconInterface> = function OmegaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OmegaIcon ${className}`;
      return (
        <Icon alt="Omega" className={classNames} {...propsRest}>
          <path d="M19.15,19H13.39V16.87C15.5,15.25 16.59,13.24 16.59,10.84C16.59,9.34 16.16,8.16 15.32,7.29C14.47,6.42 13.37,6 12.03,6C10.68,6 9.57,6.42 8.71,7.3C7.84,8.17 7.41,9.37 7.41,10.88C7.41,13.26 8.5,15.26 10.61,16.87V19H4.85V16.87H8.41C6.04,15.32 4.85,13.23 4.85,10.6C4.85,8.5 5.5,6.86 6.81,5.66C8.12,4.45 9.84,3.85 11.97,3.85C14.15,3.85 15.89,4.45 17.19,5.64C18.5,6.83 19.15,8.5 19.15,10.58C19.15,13.21 17.95,15.31 15.55,16.87H19.15V19Z" />

        </Icon>
      );
    };
    OmegaIcon.displayName = 'OmegaIcon';
      