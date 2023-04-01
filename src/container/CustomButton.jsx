import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';


const CustomButton = () => {
    const handleConfetti = () => {
        confetti({ particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }});
      };

  return (
    <Button
      auto
      rounded
      ripple={false}
      size="xl"
      shadow color="success"
      onClick={handleConfetti}
      css={{
        background: '$white',
        fontWeight: '$semibold',
        boxShadow: '$md',
        position: 'relative',
        overflow: 'visible',
        color: '#313bac',
        px: '$18',
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: '$white',
          opacity: 1,
          borderRadius: '$pill',
          transition: 'all 0.4s ease'
        },
        '&:hover': {
          transform: 'translateY(-5px)',
          '&:after': {
            transform: 'scaleX(1.5) scaleY(1.6)',
            opacity: 0
          }
        },
        '&:active': {
          transform: 'translateY(-2px)'
        }
      }}
    >
      Download CV
    </Button>
  );
};

export default CustomButton;