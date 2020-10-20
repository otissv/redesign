import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const MicrophoneIcon: FC<IconInterface> = function MicrophoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrophoneIcon ${className}`;
      return (
        <Icon alt="Microphone" className={classNames} {...propsRest}>
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />

        </Icon>
      );
    };
    MicrophoneIcon.displayName = 'MicrophoneIcon';
      