import React from 'react';
import { PopupButton, InlineWidget } from 'react-calendly';

export default function Home() {
  return (
    <div>
      {typeof window !== 'undefined' && (
        <PopupButton
          url="https://calendly.com/stefan-techexpertcoach/15min"
          rootElement={document.getElementById('__docusaurus')}
          text="Let us spend 15 minutes so I can learn more about you and your needs 🚀"
        />

      )}

    <InlineWidget url="https://calendly.com/stefan-techexpertcoach/15min" />

    </div>
  );
}